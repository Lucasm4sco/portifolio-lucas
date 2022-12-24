import React from "react";
import Banner from "../Banner";
import './style.css';

const ContentBanner = () => (
    <Banner>
        <div className="content-banner">
            <h1>Olá, eu me chamo Lucas <span>👋</span></h1>
            <p>Faço analise e desenvolvimento de sistemas e sou iniciante nos estudo de Front-end</p>
        </div>
    </Banner>
)

export default ContentBanner;