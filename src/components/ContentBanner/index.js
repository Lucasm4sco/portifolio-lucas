import Banner from "../Banner";
import './style.css';

const ContentBanner = ({ darkMode }) => {
    return (
        <Banner darkMode={darkMode}>
            <div className="content-banner">
                <h1>
                    <span className="typing-1">Olá, eu me chamo </span>
                    <span className="typing-2">Lucas 👋</span>
                </h1>
                <div className="blue-stripe-animation">
                    <p>Futuro desenvolvedor Full Stack</p>
                    <span></span>
                </div>
            </div>
        </Banner>
    )
}

export default ContentBanner;