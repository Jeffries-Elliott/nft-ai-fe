import {Abi, Address} from "viem";
import {useMemo} from "react";
import {useChainId, useWalletClient} from "wagmi";
import {getContract} from "@/utils/contractHelpers";
import {erc721CollectionABI} from "@/config/abis/erc721collection";

export function useContract<TAbi extends Abi>(
  addressOrAddressMap?: Address | { [chainId: number]: Address },
  abi?: TAbi,
  options?: {chainId?: number},
) {
  const currentChainId = useChainId()
  const chainId = options?.chainId || currentChainId
  const { data: walletClient } = useWalletClient()

  return useMemo(() => {
    if (!addressOrAddressMap || !abi || !chainId) return null
    let address: Address | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId]
    if (!address) return null
    try {
      return getContract({
        abi,
        address,
        chainId,
        signer: walletClient ?? undefined,
      })
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, abi, chainId, walletClient])
}

export const useErc721CollectionContract = (collectionAddress: Address | undefined) => {
  return useContract(collectionAddress, erc721CollectionABI)
}
