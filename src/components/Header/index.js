import React from "react";
import './style.css';
import './btnStyle.css'


const Header = ({ darkMode, setDarkMode }) => (
    <header className={'header ' + (darkMode ? 'dark-mode' : 'light-mode')}>
        <div className="container">
            <span className="logo-header">Portifólio</span>
            <nav>
                <ul className="container" type="none">
                    <li><a className="link" href="#about">About</a></li>
                    <li><a className="link" href="#skills">Skills</a></li>
                    <li><a className="link" href="#contact">Contato</a></li>
                    <li>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={darkMode ? 'ativado' : 'desativado'}>
                            <div className="select">
                            </div>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;