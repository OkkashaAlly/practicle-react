//import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from 'ethers';

export const web3Connect = async () => {

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed1.binance.org'
                },
                chainId: 56
            }
        }
    }
    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions
    })
    const provider = await web3Modal.connect()
    await web3Modal.toggleModal()
    if (provider.chainId == 0x38) {
        try {

            const ethProvider = new ethers.providers.Web3Provider(provider);

            await ethProvider.send("eth_requestAccounts", []);
            const signer = ethProvider.getSigner()
            const account = await signer.getAddress()
            let balance = await signer.getBalance()
            balance /= 10 ** 18


            return {
                account,
                provider,
                balance
            }
        } catch (err) {
            console.log(err)
        }
    } else {
        alert('connect to binance smart chain')
    }

}

export const disconnect = async () => {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed1.binance.org'
                },
                chainId: 56
            }
        }
    }
    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions
    })

    await web3Modal.clearCachedProvider()

    return null;
}