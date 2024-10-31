use ic_cdk::{query, update};


use ic_cdk::api::management_canister::http_request::{
    http_request, CanisterHttpRequestArgument,  HttpMethod, HttpResponse, TransformArgs,
    TransformContext, TransformFunc,
};

#[update]
async fn get_us_treasury_rate() -> String {


    let url = format!(
"https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/avg_interest_rates?fields=avg_interest_rate_amt&filter=security_desc%3Aeq%3ATreasury%20Bonds%2Crecord_date%3Aeq%3A2024-01-31", 
    );

    let request = CanisterHttpRequestArgument {
        url: url.to_string(),
        method: HttpMethod::GET,
        body: None,               //optional for request
        max_response_bytes: None, //optional for request
        //transform: None,          //optional for request
        transform: Some(TransformContext {

            function: TransformFunc(candid::Func {
                principal: ic_cdk::api::id(),
                method: "transform".to_string(),
            }),

            context: vec![],
        }),
        headers: Vec::new(),
    };

        let cycles: u128 = 230_949_972_000;
        match http_request(request, cycles).await {

        Ok((response,)) => {

            String::from_utf8(response.body).expect("Transformed response is not UTF-8 encoded.")
        }
        Err((r, m)) => {
            let message =
                format!("The http_request result into error. RejectionCode: {r:?}, Error: {m}");

            message
        }
    }
}

#[query]
fn transform(raw: TransformArgs) -> HttpResponse {
    let mut res = HttpResponse {
        status: raw.response.status.clone(),
        ..Default::default()
    };
    if res.status == 200u64 {
        res.body = raw.response.body;
    } else {
        ic_cdk::api::print(format!("Received an error from jsonropc: err = {:?}", raw));
    }
    res
}
