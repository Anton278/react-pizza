import BasketItem from "../BasketItem";
import "./Basket.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IBasketItem } from "../../assets/types";
import { CLEAR_BASKET, IDefaultStore } from "../../reducerAndActions";
import basketImg from "./basket.svg";
import trash from "./trash.svg";
import arrowLeft from "./arrow-left.svg";

interface ITotals {
    price: number;
    amount: number;
}

const Basket = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const basket: Array<IBasketItem> = useSelector(
        (state: IDefaultStore) => state.basket
    );

    const clearBasket = () => {
        const isConfirmed: boolean = window.confirm(
            "Вы уверенны что хотите очистить корзину?"
        );
        if (isConfirmed) {
            dispatch({ type: CLEAR_BASKET });
        }
    };

    const getTotals = (): ITotals => {
        let totalPrice: number = 0;
        let totalAmount: number = 0;

        basket.forEach((pizza: IBasketItem) => {
            totalPrice += pizza.amount * pizza.price;
            totalAmount += pizza.amount;
        });

        return {
            price: totalPrice,
            amount: totalAmount,
        };
    };
    const totals: ITotals = getTotals();

    return (
        <div className="basket">
            <div className="basket__header">
                <div className="basket__title-wrapp">
                    <img
                        src={basketImg}
                        alt="shooping-cart"
                        width={29}
                        height={29}
                    />
                    <h2 className="basket__title">Корзина</h2>
                </div>
                <button className="basket__btn" onClick={clearBasket}>
                    <img src={trash} alt="trash" width={20} height={20} />
                    Очистить корзину
                </button>
            </div>
            {basket.map((pizza: IBasketItem) => (
                <BasketItem {...pizza} key={pizza.id} />
            ))}
            <div className="row basket__row"></div>
            <div className="basket__footer">
                <div className="basket__col">
                    <h3 className="basket__total-amount-wrapp">
                        Всего пицц:&nbsp;
                        <span className="basket__total-amount">
                            {totals.amount} шт.
                        </span>
                    </h3>
                    <h3 className="basket__total-price-wrapp">
                        Сумма заказа:&nbsp;
                        <span className="basket__total-price">
                            {totals.price} ₴
                        </span>
                    </h3>
                </div>
                <div className="basket__col">
                    <button
                        className="basket__btn"
                        onClick={() => navigate("/")}
                    >
                        <img
                            src={arrowLeft}
                            alt="arrow-left"
                            width={6}
                            height={12}
                        />
                        Вернуться назад
                    </button>
                    <button className="basket__btn">Оплатить сейчас</button>
                </div>
            </div>
        </div>
    );
};

export default Basket;
