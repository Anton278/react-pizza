import { useState } from "react";
import "./PizzaBlock.css";
// import { BasketItem } from "../../App";
import PizzaBlockButton from "../PizzaBlockButton";
import { BasketItemType } from "../../App";

type PizzaBlockProps = {
    name: string;
    img: string;
    prices: {
        thinDough: {
            ["26cm"]: number;
            ["30cm"]: number;
            ["40cm"]: number;
        };
        traditionalDough: {
            ["26cm"]: number;
            ["30cm"]: number;
            ["40cm"]: number;
        };
    };
    basket: Array<BasketItemType>;
    setBasket: React.Dispatch<React.SetStateAction<Array<BasketItemType>>>;
};

const PizzaBlock = (props: PizzaBlockProps) => {
    const { name, img, prices, basket, setBasket } = props;

    const [activeDoughType, setActiveDoughType] = useState<
        "тонкое" | "традиционное"
    >("тонкое");
    const [activeDoughSize, setActiveDoughSize] = useState<
        "26 см." | "30 см." | "40 см."
    >("26 см.");

    const doughTypes: Array<string> = ["тонкое", "традиционное"];
    const doughSizes: Array<string> = ["26 см.", "30 см.", "40 см."];

    const calcPrice = (): number => {
        if (activeDoughType === "тонкое") {
            switch (activeDoughSize) {
                case "26 см.":
                    return prices.thinDough["26cm"];
                case "30 см.":
                    return prices.thinDough["30cm"];
                case "40 см.":
                    return prices.thinDough["40cm"];
            }
        } else {
            switch (activeDoughSize) {
                case "26 см.":
                    return prices.traditionalDough["26cm"];
                case "30 см.":
                    return prices.traditionalDough["30cm"];
                case "40 см.":
                    return prices.traditionalDough["40cm"];
            }
        }
    };

    return (
        <div className="main__pizza-block pizza-block">
            <div className="pizza-block__img-wrapp">
                <img src={img} alt={name} className="pizza-block__img" />
            </div>
            <div className="pizza-block__name">{name}</div>
            <div className="pizza-block__options">
                <div className="pizza-block__option">
                    {doughTypes.map((doughType) => {
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
                            >
                                {doughType}
                            </div>
                        );
                    })}
                </div>
                <div className="pizza-block__option">
                    {doughSizes.map((doughSize) => {
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
                            >
                                {doughSize}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="pizza-block__footer">
                <div className="pizza-block__price">
                    от {calcPrice()} &#8372;
                </div>
                <PizzaBlockButton
                    basket={basket}
                    setBasket={setBasket}
                    img={img}
                    name={name}
                    doughType={activeDoughType}
                    doughSize={activeDoughSize}
                    priceForOne={calcPrice()}
                />
            </div>
        </div>
    );
};

export default PizzaBlock;
