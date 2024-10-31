import { createConfig, http } from "wagmi";

import { sepolia } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

// Replace with your own WalletConnect project ID
// Register for free at https://walletconnect.com/
const WALLETCONNECT_PROJECT_ID = "3936b3795b20eea5fe9282a3a80be958";

export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [walletConnect({ projectId: WALLETCONNECT_PROJECT_ID })],
  transports: {
    [sepolia.id]: http(),
  },
});
