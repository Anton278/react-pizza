import { BasketItemType } from "../../App";

type PizzaBlockButtonProps = {
    name: string;
    img: string;
    priceForOne: number;
    doughType: string;
    doughSize: string;
    basket: Array<BasketItemType>;
    setBasket: React.Dispatch<React.SetStateAction<Array<BasketItemType>>>;
};

const PizzaBlockButton = (props: PizzaBlockButtonProps) => {
    const { name, img, priceForOne, doughType, doughSize, basket, setBasket } =
        props;

    const getAmount = (): number => {
        let amount: number = 0;
        basket.forEach((pizza: BasketItemType) => {
            if (pizza.name === name) {
                amount += pizza.amount;
            }
        });
        return amount;
    };

    const addToBasket = () => {
        setBasket((oldBasket: Array<BasketItemType>) => {
            const desiredPizza = oldBasket.find((pizza: BasketItemType) => {
                if (
                    pizza.name === name &&
                    pizza.doughType === doughType &&
                    pizza.doughSize === doughSize
                ) {
                    return true;
                }
                return false;
            });
            if (desiredPizza) {
                return oldBasket.map((pizza: BasketItemType) => {
                    if (
                        pizza.name === name &&
                        pizza.doughType === doughType &&
                        pizza.doughSize === doughSize
                    ) {
                        return { ...pizza, amount: pizza.amount + 1 };
                    }
                    return pizza;
                });
            } else {
                return [
                    ...oldBasket,
                    {
                        name: name,
                        img: img,
                        doughType: doughType,
                        doughSize: doughSize,
                        priceForOne: priceForOne,
                        amount: 1,
                    },
                ];
            }
        });
    };
    return (
        <button className="pizza-block__btn" onClick={addToBasket}>
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
    );
};

export default PizzaBlockButton;
