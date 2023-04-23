import React, {useEffect, useState} from 'react'
import './styles.css'
import {mintedCount} from "../../graph/GraphService";
import {eventEmitter} from "./eventEmitter";

export default function MyCounter() {
    const [count, setMinted] = useState<number | null>(null);

    useEffect(() => {
        const fetchMinted = async () => {
            const result = await mintedCount();
            setMinted(result);
        };

        const updateMintedCount = async () => {
            const newMintedCount = await mintedCount();
            setMinted(newMintedCount);
        };

        fetchMinted();

        // Listen to the nftMinted event and update the minted count
        eventEmitter.on('nftMinted', updateMintedCount);

        // Clean up the listener on component unmount
        return () => {
            eventEmitter.removeListener('nftMinted', updateMintedCount);
        };

    }, []);

    return (
 <section className='section-counter'>

    <div className="counter-wrap">
            <div className="count">
                <h2 className="num">{count}</h2>
                <p className="num-title"> tokens minted</p>
            </div>
            <div className="count">
                <h2 className="num">{count !== null ? (count * 0.1).toFixed(2) : '-'}</h2>
                <p className="num-title">funds raised</p>
            </div>
    </div>

 </section>
);
}