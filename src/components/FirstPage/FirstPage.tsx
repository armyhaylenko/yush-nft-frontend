import React from 'react'
import Button from "@mui/material/Button";
import './styles.css'
import {connectWallet} from "../Header/Header";

export default function FirstPage() {
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
