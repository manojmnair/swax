export default function Home() {

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
                                                    <h4 className="feature-title">Swax Finance</h4>
                                                    <p> Swax Finance is a Decentralized Finance (DeFi) platform built on top of the ICP. It aims at creating a platform for RWA creation using  yield bearing assets such as T-bills, corporate bonds, etc. , gold and cryptocurrency assets. It also aims at providing trading these assets.
</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-gift"></i>
                                                </div>
                                                <div className="features-content">

                                                    <p> Swax finance helps in providing lending keeping the tokens as collateral.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-laptop-phone"></i>
                                                </div>
                                                <div className="features-content">
                                                    <p> Swax finance aims at creating tokens compliance with rules and regulations.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-leaf"></i>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 ">
                                <div className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight" data-wow-delay="0.3s">
                                    <img src="apartment.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section id="team" className="py-12 text-center px-12 bg-zinc-700">
                <div className="container">
                    <div className="text-center">
                        <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">Our Team</h2>
                    </div>
                    <div className="flex flex-wrap justify-center">

                        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
                            <div className="team-item">
                                <div className="team-img relative">
                                    <img className="img-fluid" width={370} height={280} src="/Manoj.jpg" alt="" />
                                    <div className="team-overlay">
                                        <ul className="flex justify-center">
                                            <li className="mx-1">
                                                <a href="#" className="social-link hover:bg-indigo-500">
                                                    <i className="lni lni-facebook-original" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li className="mx-1">
                                                <a href="#" className="social-link hover:bg-blue-400">
                                                    <i className="lni lni-twitter-original" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li className="mx-1">
                                                <a href="#" className="social-link hover:bg-red-500">
                                                    <i className="lni lni-instagram-original" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center px-5 py-3">
                                    <h3 className="team-name">Manoj M</h3>
                                    <p>Blockchain Developer</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>





            <footer id="footer" className=" py-16">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="mx-3 mb-8">
                                <div className="footer-logo mb-3">
                                    <img src="/img/logo.png" alt="" />
                                </div>
                                <p className="text-gray-100">.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="mx-3 mb-8">
                                <h3 className="font-bold text-xl text-white mb-5">Company</h3>

                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="mx-3 mb-8">
                                <h3 className="font-bold text-xl text-white mb-5">About</h3>

                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="mx-3 mb-8">
                                <h3 className="font-bold text-xl text-white mb-5">Find us on</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>




            <a href="#" className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg z-20 duration-300 hover:bg-blue-400">
                <i className="lni lni-arrow-up">^</i>
            </a>

        </div>
    );
}