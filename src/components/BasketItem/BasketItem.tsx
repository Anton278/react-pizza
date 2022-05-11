import "./BasketItem.scss";
import { IBasketItem } from "../../assets/types";
import { useDispatch } from "react-redux";
import {
    ADD_ITEM_AMOUNT_IN_BASKET,
    DECREASE_ITEM_AMOUNT_IN_BASKET,
    DELETE_ITEM,
} from "../../actions";
import remove from "./remove.svg";
import add from "./add.svg";
import deleteImg from "./delete.svg";

const BasketItem = (props: IBasketItem) => {
    const { name, img, doughType, doughSize, amount, price, id } = props;
    const dispatch = useDispatch();

    return (
        <>
            <div className="row basket__row"></div>
            <div className="basket__item">
                <div className="basket__img-wrapp">
                    <img
                        src={img}
                        alt={name}
                        className="basket__img"
                        width={80}
                        height={80}
                    />
                </div>
                <div className="basket__text">
                    <div className="basket__name">{name}</div>
                    <div className="basket__options">
                        {doughType} тесто, {doughSize}
                    </div>
                </div>
                <div className="basket__amount-wrapp">
                    <img
                        src={remove}
                        alt="remove-button"
                        width={32}
                        height={32}
                        onClick={() =>
                            dispatch({
                                type: DECREASE_ITEM_AMOUNT_IN_BASKET,
                                payload: {
                                    id: id,
                                    doughType: doughType,
                                    doughSize: doughSize,
                                },
                            })
                        }
                    />
                    <div className="basket__amount">{amount}</div>
                    <img
                        src={add}
                        alt="add-button"
                        width={32}
                        height={32}
                        onClick={() =>
                            dispatch({
                                type: ADD_ITEM_AMOUNT_IN_BASKET,
                                payload: {
                                    id: id,
                                    doughType: doughType,
                                    doughSize: doughSize,
                                },
                            })
                        }
                    />
                </div>
                <div className="basket__price">{amount * price} ₴</div>
                <div className="basket__btn-wrapp">
                    <img
                        src={deleteImg}
                        alt="delete-button"
                        width={32}
                        height={32}
                        onClick={() =>
                            dispatch({
                                type: DELETE_ITEM,
                                payload: {
                                    id: id,
                                    doughType: doughType,
                                    doughSize: doughSize,
                                },
                            })
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default BasketItem;
