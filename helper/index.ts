import axios from 'axios'
import { v4 } from 'uuid'

const rpcUrlMainnet: string =
  'https://solana-mainnet.g.alchemy.com/v2/jbYl0LRkjDvDgvlnobQaNaoK5kt7iJ87'

const rpcUrlDevnet: string =
  'https://solana-devnet.g.alchemy.com/v2/jbYl0LRkjDvDgvlnobQaNaoK5kt7iJ87'

const headersTok = {
  jsonrpc: '2.0',
  id: v4(),
  method: 'getTokenAccountsByOwner',
  params: [
    'BA5ccW2PQmHQWMpiq2DqovtoSNRSc6zwVz8basFLKVmj',
    {
      programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    },
    {
      encoding: 'jsonParsed',
      commitment: 'processed'
    }
  ]
}

const header3 = {
  jsonrpc: '2.0',
  id: 1,
  method: 'getTokenAccountBalance',
  params: ['BA5ccW2PQmHQWMpiq2DqovtoSNRSc6zwVz8basFLKVmj']
}

const infoHeaders = {
  jsonrpc: '2.0',
  id: 1,
  method: 'getAccountInfo',
  params: ['BA5ccW2PQmHQWMpiq2DqovtoSNRSc6zwVz8basFLKVmj']
}

export async function getTokenInfo(token: string, network: string) {
  const infoHeaders = {
    jsonrpc: '2.0',
    id: v4(),
    method: 'getAccountInfo',
    params: [token]
  }

  const transferHeaders = {
    jsonrpc: '2.0',
    id: v4(),
    method: 'getSignaturesForAddress',
    params: [token, { limit: 30 }]
  }

  const rpcUrl: string =
    network === 'mainnet-beta' ? rpcUrlMainnet : rpcUrlDevnet

  const accInfo = await axios.post(rpcUrl, infoHeaders)

  const transactions = await axios.post(rpcUrl, transferHeaders)

  const res = {
    accInfo: accInfo.data,
    transactions: transactions.data.result
  }
  return res
}

export var network = 'mainnet-beta'

export function setNetwork(network: string) {
  network = network
}

export function getNetwork() {
  return network
}
