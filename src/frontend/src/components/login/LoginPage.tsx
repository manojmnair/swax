import AddressPill from "../AddressPill";
import Button from "../ui/Button";
import ConnectButton from "./ConnectButton";
import LoginButton from "./LoginButton";
import {  faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { isChainIdSupported } from "../../wagmi/is-chain-id-supported";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import { useChainId } from "wagmi";
import { useEffect } from "react";
import { useSiweIdentity } from "ic-use-siwe-identity";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPage(): React.ReactElement {
  const { isConnected, address } = useAccount();
  const chainId = useChainId();
  const { prepareLogin, isPrepareLoginIdle, prepareLoginError, loginError } =
    useSiweIdentity();

  /**
   * Preload a Siwe message on every address change.
   */
  useEffect(() => {
    if (!isPrepareLoginIdle || !isConnected || !address) return;
    prepareLogin();
  }, [isConnected, address, prepareLogin, isPrepareLoginIdle]);

  /**
   * Show an error toast if the prepareLogin() call fails.
   */
  useEffect(() => {
    if (prepareLoginError) {
      toast.error(prepareLoginError.message, {
        position: "bottom-right",
      });
    }
  }, [prepareLoginError]);

  /**
   * Show an error toast if the login call fails.
   */
  useEffect(() => {
    if (loginError) {
      toast.error(loginError.message, {
        position: "bottom-right",
      });
    }
  }, [loginError]);

  return (
/*     <div className="flex flex-col items-center justify-center w-full h-screen gap-10">

      <div className="w-80 md:w-96  rounded-3xl flex flex-col items-center py-5 px-5 mx-10"> */
<>
{/*         <div className="w-full sm:w-1/2 lg:w-1/2">
          <div className="m-3">
            <div className="icon text-4xl">
              <i className="lni lni-gift"></i>
            </div>
            <div className="features-content">
              <h4 className="feature-title">Free to Use</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
            </div>
          </div>
        </div> */}
      <section className="pt-12  sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight  sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Astit Finance - RWA based DeFi
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg  font-inter">
              Transforming Real-World Assets into Digital Opportunities using ICP
            </h1>


            <div className="flex flex-col items-center  w-full gap-10 p-4">
              <div className="flex items-center justify-center w-full gap-5">

                <div>
                  {!isConnected && <ConnectButton />}
                  {isConnected && isChainIdSupported(chainId) && (
                    <AddressPill
                      address={address}
                      className="justify-center w-44 border-solid border-2 border-indigo-600"
                    />
                  )}
                  {isConnected && !isChainIdSupported(chainId) && (
                    <Button disabled icon={faWaveSquare} variant="outline">
                      Unsupported Network
                    </Button>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center w-full gap-5">

                <div>
                  {" "}
                  <LoginButton />
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="w-full">
          <div className="relative mx-auto ">
            <div className="lg:max-w-xl lg:mx-auto">
              <img className="px-30 " height={400} src="/RWA.png" />
            </div>
          </div>
        </div>
      </section>


    </>

  );
}
