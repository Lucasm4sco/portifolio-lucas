import React from "react";
import './style.css';

const Banner = ({children}) => (
    <section className="presentation banner">
        {children}
    </section>
)

export default Banner;