import "./Header.css";
import icon from "./icon.svg";
import basketImg from "./basket.svg";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IBasketItem } from "../../assets/types";

type HeaderProps = {
    showBasket: boolean;
};
interface ITotals {
    price: number;
    amount: number;
}

const Header = ({ showBasket }: HeaderProps) => {
    const navigate = useNavigate();
    const basket: Array<IBasketItem> = useSelector(
        (state: any) => state.basketReducer
    );

    const getTotals = (): ITotals => {
        let totalPrice = 0;
        let totalAmount = 0;

        basket.forEach((pizza: IBasketItem) => {
            totalPrice += pizza.price * pizza.amount;
            totalAmount += pizza.amount;
        });

        return {
            price: totalPrice,
            amount: totalAmount,
        };
    };

    const totals: ITotals = getTotals();

    return (
        <>
            <header>
                <div className="header__col">
                    <img
                        src={icon}
                        alt="icon"
                        width={38}
                        height={38}
                        className="header__icon"
                    />
                    <div className="header__title-wrapp">
                        <h3 className="header__title">REACT PIZZA</h3>
                        <h5 className="header__subtitle">
                            самая вкусная пицца во вселенной
                        </h5>
                    </div>
                </div>
                {showBasket && (
                    <button
                        className="header__btn"
                        onClick={() => navigate("/basket")}
                    >
                        <span className="header__total-price">
                            {totals.price} грн
                        </span>
                        <span className="header__vrow"></span>
                        <span className="header__total-amount">
                            <img
                                src={basketImg}
                                alt="basket-icon"
                                width={16}
                                height={16}
                            />
                            &nbsp;
                            {totals.amount}
                        </span>
                    </button>
                )}
            </header>
            <div className="row" />
        </>
    );
};

export default Header;
