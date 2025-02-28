import {
  Address,
  GetContractReturnType,
  PublicClient,
  getContract as viemGetContract,
  Abi,
  WalletClient, erc721Abi,
} from "viem";
import {viemClients} from "@/utils/viem";
import {defaultChainId} from "@/utils/wagmi";

export const getContract = <TAbi extends Abi | readonly unknown[], TWalletClient extends WalletClient>({
  abi,
  address,
  chainId = defaultChainId,
  publicClient,
  signer,
}: {
  abi: TAbi | readonly unknown[]
  address: Address
  chainId?: number
  signer?: TWalletClient
  publicClient?: PublicClient
}) => {
  const c = viemGetContract({
    abi,
    address,
    client: {
      public: publicClient ?? viemClients[chainId],
      wallet: signer,
    },
  }) as unknown as GetContractReturnType<TAbi, PublicClient, Address>

  return {
    ...c,
    account: signer?.account,
    chain: signer?.chain,
  }
}

export const getErc721Contract = (address: Address, walletClient?: WalletClient) => {
  return getContract({ abi: erc721Abi, address, signer: walletClient })
}
