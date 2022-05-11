import BasketItem from "../BasketItem";
import "./Basket.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IBasketItem } from "../../assets/types";
import { CLEAR_BASKET } from "../../actions";
import basketImg from "./basket.svg";
import trash from "./trash.svg";
import arrowLeft from "./arrow-left.svg";

const Basket = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const basket: Array<IBasketItem> = useSelector(
        (state: any) => state.basketReducer
    );

    const clearBasket = () => {
        const isConfirmed: boolean = window.confirm(
            "Вы уверенны что хотите очистить корзину?"
        );
        if (isConfirmed) {
            dispatch({ type: CLEAR_BASKET });
        }
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        basket.forEach((pizza: IBasketItem) => {
            totalPrice += pizza.amount * pizza.price;
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
        <div className="basket">
            <div className="basket__header">
                <div className="basket__title-wrapp">
                    <img
                        src={basketImg}
                        alt="shooping-cart"
                        width={29}
                        height={29}
                    />
                    <div className="basket__title">Корзина</div>
                </div>
                <div className="basket__btn" onClick={clearBasket}>
                    <img src={trash} alt="trash" width={20} height={20} />
                    Очистить корзину
                </div>
            </div>
            {basket.map((pizza: IBasketItem) => (
                <BasketItem {...pizza} key={pizza.id} />
            ))}
            <div className="row basket__row"></div>
            <div className="basket__footer">
                <div className="basket__col">
                    <div className="basket__total-amount-wrapp">
                        Всего пицц:&nbsp;
                        <span className="basket__total-amount">
                            {getTotalAmount()} шт.
                        </span>
                    </div>
                    <div className="basket__total-price-wrapp">
                        Сумма заказа:&nbsp;
                        <span className="basket__total-price">
                            {getTotalPrice()} ₴
                        </span>
                    </div>
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
