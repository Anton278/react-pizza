import { useState } from "react";
import "./PizzaBlock.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM_TO_BASKET } from "../../actions";
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

    const doughTypes: Array<string> = ["тонкое", "традиционное"];
    const doughSizes: Array<string> = ["26 см.", "30 см.", "40 см."];
    const basket: Array<IBasketItem> = useSelector(
        (state: any) => state.basketReducer
    );

    const calcPrice = () => {
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
    };
    const getAmount = () => {
        let totalAmount = 0;
        basket.forEach((pizza: IBasketItem) => {
            if (pizza.name === name) {
                totalAmount += pizza.amount;
            }
        });
        return totalAmount;
    };

    return (
        <div className="main__pizza-block pizza-block">
            <img
                src={img}
                alt={name}
                className="pizza-block__img"
                width={260}
                height={260}
            />
            <div className="pizza-block__name">{name}</div>
            <div className="pizza-block__options">
                <div className="pizza-block__option">
                    {doughTypes.map((doughType: string) => {
                        const className =
                            doughType === activeDoughType
                                ? "pizza-block__item pizza-block__item_active"
                                : "pizza-block__item";
                        return (
                            <div
                                className={className}
                                onClick={(e: any) =>
                                    setActiveDoughType(e.target.innerText)
                                }
                                key={doughType}
                            >
                                {doughType}
                            </div>
                        );
                    })}
                </div>
                <div className="pizza-block__option">
                    {doughSizes.map((doughSize: string) => {
                        const className =
                            doughSize === activeDoughSize
                                ? "pizza-block__item pizza-block__item_active"
                                : "pizza-block__item";
                        return (
                            <div
                                className={className}
                                onClick={(e: any) =>
                                    setActiveDoughSize(e.target.innerText)
                                }
                                key={doughSize}
                            >
                                {doughSize}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="pizza-block__footer">
                <div className="pizza-block__price">от {calcPrice()} ₴</div>
                <button
                    className="pizza-block__btn"
                    onClick={() =>
                        dispatch({
                            type: ADD_ITEM_TO_BASKET,
                            payload: {
                                img: img,
                                name: name,
                                doughType: activeDoughType,
                                doughSize: activeDoughSize,
                                id: id,
                                amount: 1,
                                price: calcPrice(),
                            },
                        })
                    }
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#EB5A1E"
                        />
                    </svg>
                    Добавить
                    {getAmount() === 0 ? null : (
                        <div className="pizza-block__count">{getAmount()}</div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PizzaBlock;
