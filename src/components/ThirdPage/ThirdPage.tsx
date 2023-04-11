import React from 'react'
import './styles.css'

export default function ThirdPage() {
return (
<div className="carouselContainer">
    <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
            <li id="carousel__slide1"
                className="carousel__slide">
                <div className="carousel__snapper">
                    <a href="#carousel__slide4"
                       className="carousel__prev">Go to last slide</a>
                    <a href="#carousel__slide2"
                       className="carousel__next">Go to next slide</a>
                </div>
                <div className="cardTitle">Token example #1</div>
                <div className="image"/>
                <div className="priceContainer">
                    <div className="btcPrice">500BTC</div>
                    <div className="dollarPrice">$3000</div>
                </div>
            </li>
            <li id="carousel__slide2"
                className="carousel__slide">
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide1"
                   className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide3"
                   className="carousel__next">Go to next slide</a>
                <div className="cardTitle">Token example #1</div>
                <div className="image"/>
                <div className="priceContainer">
                    <div className="btcPrice">500BTC</div>
                    <div className="dollarPrice">$3000</div>
                </div>
            </li>
            <li id="carousel__slide3"
                className="carousel__slide">
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide2"
                   className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide4"
                   className="carousel__next">Go to next slide</a>
                <div className="cardTitle">Token example #1</div>
                <div className="image"/>
                <div className="priceContainer">
                    <div className="btcPrice">500BTC</div>
                    <div className="dollarPrice">$3000</div>
                </div>
            </li>
            <li id="carousel__slide4"
                className="carousel__slide">
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide3"
                   className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide1"
                   className="carousel__next">Go to first slide</a>
                <div className="cardTitle">Token example #1</div>
                <div className="image"/>
                <div className="priceContainer">
                    <div className="btcPrice">500BTC</div>
                    <div className="dollarPrice">$3000</div>
                </div>
            </li>
        </ol>
        <aside className="carousel__navigation">
            <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide1"
                       className="carousel__navigation-button">Go to slide 1</a>
                </li>
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide2"
                       className="carousel__navigation-button">Go to slide 2</a>
                </li>
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide3"
                       className="carousel__navigation-button">Go to slide 3</a>
                </li>
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide4"
                       className="carousel__navigation-button">Go to slide 4</a>
                </li>
            </ol>
        </aside>
    </section>
</div>
);
}