import "./Header.css";
import icon from "./icon.svg";
import vrow from "./vrow.svg";
import basketImg from "./basket.svg";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IBasketItem } from "../../assets/types";

type HeaderProps = {
    showBasket: boolean;
};

const Header = ({ showBasket }: HeaderProps) => {
    const navigate = useNavigate();
    const basket: Array<IBasketItem> = useSelector(
        (state: any) => state.basketReducer
    );

    const getTotalPrice = () => {
        let totalPrice = 0;
        basket.forEach((pizza: IBasketItem) => {
            totalPrice += pizza.price * pizza.amount;
        });
        return totalPrice;
    };
    const getTotalAmount = () => {
        let totalAmount = 0;
        basket.forEach((pizza: IBasketItem) => {
            totalAmount += pizza.amount;
        });
        return totalAmount;
    };

    return (
        <>
            <header>
                <div className="header__box">
                    <img
                        src={icon}
                        alt="pizza-icon"
                        width={38}
                        height={38}
                        className="header__logo"
                    />
                    <div className="header__text">
                        <div className="header__title">REACT PIZZA</div>
                        <div className="header__subtitle">
                            самая вкусная пицца во вселенной
                        </div>
                    </div>
                </div>
                {showBasket && (
                    <div
                        className="header__basket"
                        onClick={() => navigate("/basket")}
                    >
                        <div className="header__total-price">
                            {getTotalPrice()} грн
                        </div>
                        <img
                            src={vrow}
                            alt="vertical-row"
                            width={1}
                            height={25}
                            className="header__vrow"
                        />
                        <img
                            src={basketImg}
                            alt="basket-icon"
                            width={16}
                            height={16}
                        />
                        <div className="header__total-amount">
                            {getTotalAmount()}
                        </div>
                    </div>
                )}
            </header>
            <div className="row" />
        </>
    );
};

export default Header;
