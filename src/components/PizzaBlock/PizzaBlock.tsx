import "./PizzaBlock.css";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PIZZA_TO_BASKET, IDefaultStore } from "../../reducerAndActions";
import { IBasketItem } from "../../assets/types";

interface IPizzaBlockProps {
    name: string;
    img: string;
    price: {
        thinDough: {
            "26cm": number;
            "30cm": number;
            "40cm": number;
        };
        traditionalDough: {
            "26cm": number;
            "30cm": number;
            "40cm": number;
        };
    };
    id: number;
}

const PizzaBlock = (props: IPizzaBlockProps) => {
    const { name, img, price, id } = props;
    const dispatch = useDispatch();

    const [activeDoughType, setActiveDoughType] = useState<
        "тонкое" | "традиционное"
    >("тонкое");
    const [activeDoughSize, setActiveDoughSize] = useState<
        "26 см." | "30 см." | "40 см."
    >("26 см.");

    const basket: Array<IBasketItem> = useSelector(
        (state: IDefaultStore) => state.basket
    );

    const currentPrice: number | void = useMemo(() => {
        if (activeDoughType === "тонкое") {
            switch (activeDoughSize) {
                case "26 см.":
                    return price.thinDough["26cm"];
                case "30 см.":
                    return price.thinDough["30cm"];
                case "40 см.":
                    return price.thinDough["40cm"];
            }
        } else if (activeDoughType === "традиционное") {
            switch (activeDoughSize) {
                case "26 см.":
                    return price.traditionalDough["26cm"];
                case "30 см.":
                    return price.traditionalDough["30cm"];
                case "40 см.":
                    return price.traditionalDough["40cm"];
            }
        }
    }, [activeDoughType, activeDoughSize]);

    const amount: number = useMemo(() => {
        let amount: number = 0;
        basket.forEach((pizza: IBasketItem) => {
            if (pizza.id === id) {
                amount += pizza.amount;
            }
        });
        return amount;
    }, [basket]);

    return (
        <div className="card">
            <img
                src={process.env.PUBLIC_URL + img}
                alt={name}
                className="card__img"
                width={260}
                height={260}
            />
            <h4 className="card__name">{name}</h4>
            <div className="card__options">
                <ul className="card__option">
                    <li
                        className={
                            activeDoughType === "тонкое"
                                ? "card__option-item card__option-item_active"
                                : "card__option-item"
                        }
                        onClick={() => setActiveDoughType("тонкое")}
                    >
                        тонкое
                    </li>
                    <li
                        className={
                            activeDoughType === "традиционное"
                                ? "card__option-item card__option-item_active"
                                : "card__option-item"
                        }
                        onClick={() => setActiveDoughType("традиционное")}
                    >
                        традиционное
                    </li>
                </ul>
                <ul className="card__option">
                    <li
                        className={
                            activeDoughSize === "26 см."
                                ? "card__option-item card__option-item_active"
                                : "card__option-item"
                        }
                        onClick={() => setActiveDoughSize("26 см.")}
                    >
                        26 см.
                    </li>
                    <li
                        className={
                            activeDoughSize === "30 см."
                                ? "card__option-item card__option-item_active"
                                : "card__option-item"
                        }
                        onClick={() => setActiveDoughSize("30 см.")}
                    >
                        30 см.
                    </li>
                    <li
                        className={
                            activeDoughSize === "40 см."
                                ? "card__option-item card__option-item_active"
                                : "card__option-item"
                        }
                        onClick={() => setActiveDoughSize("40 см.")}
                    >
                        40 см.
                    </li>
                </ul>
            </div>
            <div className="card__footer">
                <h3 className="card__price">от {currentPrice} ₴</h3>
                <button
                    className="card__btn"
                    onClick={() =>
                        dispatch({
                            type: ADD_PIZZA_TO_BASKET,
                            payload: {
                                img: img,
                                name: name,
                                doughType: activeDoughType,
                                doughSize: activeDoughSize,
                                id: id,
                                amount: 1,
                                price: currentPrice,
                            },
                        })
                    }
                >
                    <span className="card__plus" />
                    Добавить
                    {amount === 0 ? null : (
                        <h6 className="card__amount">{amount}</h6>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PizzaBlock;
