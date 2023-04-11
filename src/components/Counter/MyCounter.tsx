import React from 'react'
import './styles.css'

export default function MyCounter() {

return (
 <section className='section-counter'>

    <div className="counter-wrap">
            <div className="count">
                <h2 className="num">20</h2>
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