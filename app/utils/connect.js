import Web3EthContract from 'web3-eth-contract'
import WallectConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import Web3 from 'web3'
import { useMemo } from 'react'

const providerOptions = {
    walletconnect: {
        package: WallectConnectProvider,
        options: {
            rpc: {
                1: 'https://cloudflare-eth.com'
            },
            chainId: 1
        }
    }
}
let provider;





export const connect = async () => {
   // let provider; 

    const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
  })

    let provider = await web3Modal.connect()
    await web3Modal.toggleModal()

    if(provider.chainId == 0x1) {
        try {
            const web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts()
            let account = accounts[0]
            console.log(account)

            return {
                account,
                provider
            }
        } catch (err) {
            console.log(err)
        }
    } else {
        alert("Connect to Mainnet")
    }

}

export const disconnect = async () => {
    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions,
      })

      
    await web3Modal.clearCachedProvider();

    return null;
}