import React, {useEffect, useState} from 'react'
import Button from "@mui/material/Button";
import './styles.css'
import {connectWallet} from "../Header/Header";
import {toBeSoldOf} from "../../graph/GraphService";
import { eventEmitter } from '../Counter/eventEmitter';





export default function FirstPage() {
    const [txnHash, setTxnHash] = useState(null);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        if (rerender) {
            setRerender(false);
        }
    }, [rerender]);
    const buyNFT = async () => {
        try {
            const response = await window.martian.connect();
            const sender = response.address;
            const payload = {
                function: "0x3c42361676ed7b681c3531ecf3b5221caf8e3db75dc04a5669afa54f98287309::ykl_nft::mint_nft",
                type_arguments: [],
                arguments: [],
            };
            const transaction = await window.martian.generateTransaction(sender, payload);
            const txnHashResult = await window.martian.signAndSubmitTransaction(transaction);
            setTxnHash(txnHashResult);
            setRerender(true);
// Emit an event after a successful transaction
            eventEmitter.emit('nftMinted');

            console.log(toBeSoldOf);
        } catch (error) {
            console.error('Transaction failed:', error);
        }
    };
    return (
        <div id="Discover" className='container'>
            <div className='fstColumn'>
                <div className='text'>
                    Next Biggest NFT in the World
                    of Cryptocurrency
                </div>
                <Button onClick={buyNFT} className='wallet' variant="outlined" sx={{ my: 2,
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

                }}>Buy</Button>
                {txnHash && <p>Transaction Hash: {txnHash}</p>}
                <a href="mailto:test@example.com?subject=Question" style={{textDecoration: "none"}}>
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

                }}>Need help?</Button></a>
            </div>
            <div className='sndColumn'>
            </div>

        </div>
    );
}