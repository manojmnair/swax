import { useEffect, useState } from 'react';
import { useAccount, useBalance } from 'wagmi'
import { bondtoken } from '../../../declarations/bondtoken';
import { goldtoken } from '../../../declarations/goldtoken';
export default function Dashboard() {
    const [totalSupplyb, setTotalSupplyb] = useState<number | undefined>();
    const [totalSupplyg, setTotalSupplyg] = useState<number | undefined>();
    const [loading, setLoading] = useState(false);
    const account = useAccount()
    const { data } = useBalance({
        address: '0x03013e039b495bD56Ac7929a499E0680c2578C36',
    })

    const usdcBalance = useBalance({ address: '0x03013e039b495bD56Ac7929a499E0680c2578C36', token: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238' })
    const linkBalance = useBalance({ address: '0x03013e039b495bD56Ac7929a499E0680c2578C36', token: '0x779877A7B0D9E8603169DdbD7836e478b4624789' })
    const fetchTotalSupplyb = async () => {
        try {
            setLoading(true);
            const totalSupply = await bondtoken.icrc1_total_supply();
            setTotalSupplyb(+totalSupply.toString());
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    const fetchTotalSupplyg = async () => {
        try {
            setLoading(true);
            const totalSupply = await goldtoken.icrc1_total_supply();
            setTotalSupplyg(+totalSupply.toString()); // Convert BigInt to number
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchTotalSupplyb();
        fetchTotalSupplyg();
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
                                                    <h4 className="feature-title">Crypto Holdings</h4>
                                                    <p> Ethereum chain</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-gift"></i>
                                                </div>
                                                <div className="features-content">
                                                    <h4 className="feature-title">{account.address}</h4>
                                                    <p> {data?.formatted} {data?.symbol}</p>
                                                    <p> {usdcBalance.data?.formatted} USDC</p>
                                                    <p> {linkBalance.data?.formatted} LINK</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-laptop-phone"></i>
                                                </div>
                                                <div className="features-content">
                                                    <h4 className="feature-title">Token Holdings</h4>
                                                    <p> ICP Chain</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-leaf"></i>
                                                </div>
                                                <div className="features-content">
                                                    {loading && (
                                                        <div className="flex flex-col items-center justify-center w-full h-64">

                                                            <h4>Loading...</h4>
                                                        </div>
                                                    )}
                                                    <h4 className="feature-title">Principal</h4>
                                                    <p>{totalSupplyb} ASTb</p>
                                                    <p>{totalSupplyg} ASTg</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    );
}