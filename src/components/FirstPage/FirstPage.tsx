import React from 'react'
import Button from "@mui/material/Button";
import './styles.css'
import Web3 from "web3";

declare global {
    interface Window {
        martian:any;
    }
}

let martian = window.martian;
export default function FirstPage() {

    async function connectWallet() {
        if (window.martian) {
            try {
                await window.martian.connect();
                await window.martian.account()
                await window.martian.isConnected()
                //console.log(window.martian.address);
                /*     const transactions = await window.martian.getAccountResources('0x3c42361676ed7b681c3531ecf3b5221caf8e3db75dc04a5669afa54f98287309');
                     //console.log(transactions);*/

            } catch (error) {
                console.error('Error connecting to Martian Wallet:', error);
            }
        } else {
            alert('Please install a web3-enabled browser like MetaMask or Martian Wallet to interact with this app.');
        }}

    return (
        <div className='container'>
            <div className='fstColumn'>
                <div className='text'>
                    Next Biggest NFT in the World
                    of Cryptocurrency
                </div>
                <Button onClick={connectWallet} className='wallet' variant="outlined" sx={{ my: 2,
                    color: '#FFF',
                    display: 'block',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '22px',
                    borderRadius:'8px',
                    border: '1px solid #FC6327',
                    marginRight:'167px',
                    background: '#FC6327',
                    width:'210px',
                    height:'48px',

                }}>Connect Wallet</Button>
                <Button className='help' variant="outlined" sx={{ my: 2,
                    color: '#FC6327',
                    display: 'block',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '22px',
                    borderRadius:'8px',
                    border: '1px solid #FC6327',
                    marginRight:'167px',
                    width:'210px',
                    height:'48px',

                }}>Need help?</Button>
            </div>
            <div className='sndColumn'>
            </div>

        </div>
    );
}
