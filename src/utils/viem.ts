import {CHAINS} from "@/config/chains";
import {createPublicClient, http, PublicClient} from "viem";


export function createViemPublicClients() {
  return CHAINS.reduce((prev, cur) => {
    return {
      ...prev,
      [cur.id]: createPublicClient({
        chain: cur,
        transport: http(),
      }),
    }
  }, {}  as Record<number, PublicClient>)
}

export const viemClients = createViemPublicClients()

export const getPublicClient = (chainId: number ) => {
  if (viemClients[chainId]) {
    return viemClients[chainId]
  }
  const chain = CHAINS.find((c) => c.id === chainId)
  return createPublicClient({ chain, transport: http() })
}
