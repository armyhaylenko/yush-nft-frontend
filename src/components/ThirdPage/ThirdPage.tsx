import React, { useState, useEffect } from 'react'
import './styles.css'
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const getArrayUris = async () => {
    const transactions = await window.martian.getAccountResources('0x3c42361676ed7b681c3531ecf3b5221caf8e3db75dc04a5669afa54f98287309');
    const arrUris = transactions[3].data.available_media_uris;
    return arrUris
}

function hex2a(hexx:any) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

export default function ThirdPage() {
    const [uris, setUris] = useState([]);

    useEffect(() => {
        const fetchUris = async () => {
            const result = await getArrayUris();
            setUris(result);
        };

        fetchUris();
    }, []);


    return (
        <div id="NFTs" className='carousel_container'>
            <Carousel width={"70%"} showThumbs={false}  infiniteLoop={true} showStatus={false} showIndicators={false} swipeable={true} axis={"horizontal"}>
                {uris.map((uri, index) => (
                    <div key={index}>
                        <img style={{height: "400px", objectFit: "cover"}} src={hex2a(uri)} alt={`Slide ${index + 1}`} />
                        <p>0.1 APT</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
