import Img from "../../assets/image/image-equilibrium.jpg";
import "./style.scss";

export default function Card() {
    return (
        <div className="Card">
            <img className="Card__image" src={Img} alt="image" />
            <h1 className="Card__title">Equilibrium #34297</h1>
            <p className="Card__desc">
                Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="Card__info">
                <div className="info__value">
                    <img className="value__icon" src="" alt="" />
                    <span className="value__valueCoin">0.041 ETH</span>
                </div>

                <div className="info__date">
                    <img className="date__icon" src="" alt="" />
                    <span className="date__days">3 days left</span>
                </div>
            </div>

            <div className="Card__creator">
                <img className="creator__avatar" src="" alt="" />
                <span className="creator__name">Creation of </span>
                <span className="creator__name--color">Jules Wyvern</span>
            </div>
        </div>
    );
}
