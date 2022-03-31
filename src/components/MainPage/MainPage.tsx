import "./MainPage.css";
import Header from "../Header";
import Nav from "../Nav";
import PizzaBlock from "../PizzaBlock";
import { BasketItemType } from "../../App";
import data from "../../assets/pizza.js";

type MainPageProps = {
    basket: Array<BasketItemType>;
    setBasket: React.Dispatch<React.SetStateAction<Array<BasketItemType>>>;
};

const MainPage = ({ basket, setBasket }: MainPageProps) => {
    return (
        <div className="wrapp">
            <Header showBasket basket={basket} />
            <Nav />
            <main>
                <div className="main__title">Все пиццы</div>
                <div className="main__pizza-wrapp">
                    {data.map((pizza) => (
                        <PizzaBlock
                            {...pizza}
                            basket={basket}
                            setBasket={setBasket}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MainPage;
