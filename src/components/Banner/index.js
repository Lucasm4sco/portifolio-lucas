import React from "react";
import './style.css';

const Banner = ({children, darkMode}) => (
    <section className={' presentation banner ' + (darkMode ? 'dark-mode' : '')}>
        {children}
    </section>
)

export default Banner;