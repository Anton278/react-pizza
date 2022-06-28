import "./BasketItem.scss";
import { IBasketItem } from "../../assets/types";
import { useDispatch } from "react-redux";
import {
    ADD_PIZZA_AMOUNT_IN_BASKET,
    REMOVE_PIZZA_AMOUNT_IN_BASKET,
} from "../../reducerAndActions";

const BasketItem = (props: IBasketItem) => {
    const { name, img, doughType, doughSize, amount, price, id } = props;
    const dispatch = useDispatch();

    return (
        <>
            <div className="row basket__row"></div>
            <div className="basket-item">
                <div className="basket-item__title-wrapp">
                    <img
                        src={process.env.PUBLIC_URL + img}
                        alt={name}
                        className="basket-item__img"
                        width={80}
                        height={80}
                    />
                    <div className="basket-item__text-wrapp">
                        <h3 className="basket-item__title">{name}</h3>
                        <h5 className="basket-item__subtitle">
                            {doughType} тесто, {doughSize}
                        </h5>
                    </div>
                </div>
                <div className="basket-item__amount-wrapp">
                    <button
                        className="basket-item__btn"
                        onClick={() =>
                            dispatch({
                                type: REMOVE_PIZZA_AMOUNT_IN_BASKET,
                                payload: {
                                    id: id,
                                    doughType: doughType,
                                    doughSize: doughSize,
                                },
                            })
                        }
                    >
                        <span className="basket-item__minus"></span>
                    </button>
                    <h3 className="basket-item__amount">{amount}</h3>
                    <button
                        className="basket-item__btn"
                        onClick={() =>
                            dispatch({
                                type: ADD_PIZZA_AMOUNT_IN_BASKET,
                                payload: {
                                    id: id,
                                    doughType: doughType,
                                    doughSize: doughSize,
                                },
                            })
                        }
                    >
                        <span className="basket-item__plus"></span>
                    </button>
                </div>
                <h3 className="basket-item__price">{amount * price} ₴</h3>
            </div>
        </>
    );
};

export default BasketItem;
