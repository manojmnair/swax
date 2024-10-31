// use ic_cdk::{query, update};
use ic_cdk::update;

use ic_cdk::api::management_canister::http_request::{
    http_request, CanisterHttpRequestArgument,  HttpMethod, 
    TransformContext, TransformFunc,
};


#[update]
async fn get_us_gold_rate() -> String {

let url = format!("https://api.gold-api.com/price/XAU");

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


