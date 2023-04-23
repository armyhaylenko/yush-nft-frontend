import React, {useEffect, useState} from 'react'
import './styles.css'
import {mintedCount} from "../../graph/GraphService";

export default function MyCounter() {
    const [count, setMinted] = useState<number | null>(null);

    useEffect(() => {
        const minted = async () => {
            const result = await mintedCount();
            setMinted(result);
        };

        minted();
    }, []);


return (
 <section className='section-counter'>

    <div className="counter-wrap">
            <div className="count">
                <h2 className="num">{count}</h2>
                <p className="num-title"> tokens minted</p>
            </div>
            <div className="count">
                <h2 className="num">30</h2>
                <p className="num-title">funds raised</p>
            </div>
    </div>

 </section>
);
}