import { useEffect, useState } from 'react';
import { backend } from '../../../declarations/backend';
import { goldtoken } from '../../../declarations/goldtoken';
export default function GoldToken() {
    const [tokenSymbol, setTokenSymbol] = useState<string | undefined>('');
    const [tokenName, setTokenName] = useState<string | undefined>('');
    const [totalSupply, setTotalSupply] = useState<number | undefined>();
    const [goldRate, setGoldRate] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);

    const fetchTokenSymbol = async () => {
        try {
            setLoading(true);
            const symbol = await goldtoken.icrc1_symbol();
            setTokenSymbol(symbol);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    const fetchTokenName = async () => {
        try {
            setLoading(true);
            const name = await goldtoken.icrc1_name();
            setTokenName(name);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    const fetchTotalSupply = async () => {
        try {
            setLoading(true);
            const totalSupply = await goldtoken.icrc1_total_supply();
            setTotalSupply(+totalSupply.toString()); // Convert BigInt to number
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    const fetchGoldRate = async () => {
        try {
            //setLoading(true);
            const goldRateData = await backend.get_us_gold_rate();

            const goldRate_Data = JSON.parse(goldRateData);

            console.log(goldRate_Data.price);
            setGoldRate(goldRate_Data.price);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    // Fetch the count on page load
    useEffect(() => {
        fetchTokenSymbol();
        fetchTokenName();
        fetchTotalSupply();
        fetchGoldRate();
    }, []);
    return (
        <div className="w-full h-screen   rounded-lg shadow-md text-md shadow-slate-400">

            <section id="hero-area" className=" pt-18 pb-8">

                <div id="feature" className=" py-12">
                    <div className="container">
                        <div className="flex flex-wrap items-center px-10">
                            <div className="w-full lg:w-2/3 ">
                                <div className="mb-5 lg:mb-0">


                                    <div className="flex flex-wrap">
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-layers"></i>
                                                </div>
                                                <div className="features-content">
                                                    <h4 className="feature-title">Astit Bond Token - ASTg</h4>
                                                    <p> ASTb is gold denominated icrc1 token</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="rounded-lg shadow-md text-md shadow-slate-500 bg-zinc-600">
                                                {loading && (
                                                    <div className="flex flex-col items-center justify-center w-full h-64">

                                                        <h4>Loading...</h4>
                                                    </div>
                                                )}




                                                <div className="ml-12 mt-6 items-center">
                                                    <h4 >Symbol: {tokenSymbol}</h4>
                                                    <h4 >Name: {tokenName}</h4>
                                                    <h4 >Supply: {totalSupply}</h4>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-laptop-phone"></i>
                                                </div>
                                                <div className="features-content">

                                                    <p> It supports transfer, approve (icrc2) and allowance (icrc2) </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="ml-12 mt-6 items-center">
                                                {loading ? (
                                                    <div className="features-content">
                                                        <h4 className="feature-title">Getting Gold Rate</h4>

                                                    </div>
                                                ) : (
                                                    <div className="features-content">
                                                        <h4 className="feature-title">Gold Rate in USD: <span className="text-blue-600">{goldRate} $ / oz</span></h4>

                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 ">
                                <div className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight" data-wow-delay="0.3s">
                                    <img src="gold.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <a href="#" className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg z-20 duration-300 hover:bg-blue-400">
                <i className="lni lni-arrow-up">^</i>
            </a>

        </div>
    )

}