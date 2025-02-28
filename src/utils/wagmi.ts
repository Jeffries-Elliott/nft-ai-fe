import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

export const defaultChainId: number = sepolia.id

export const config = getDefaultConfig({
  appName: 'NFT-AI',
  projectId: '6a4f0260d0fccefef156a96dd2baa2a9',
  chains: [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
