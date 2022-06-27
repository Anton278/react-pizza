import "./HomePage.css";
import Header from "../../components/Header";
import Nav from "../../components/FiltersAndSorting";
import PizzaBlock from "../../components/PizzaBlock";
import { useSelector } from "react-redux";
import { IPizza } from "../../assets/types";
import { IDefaultStore } from "../../reducerAndActions";

const HomePage = () => {
    const pizza: Array<IPizza> = useSelector(
        (state: IDefaultStore) => state.pizza
    );
    const isLoaded: boolean = useSelector(
        (state: IDefaultStore) => state.isLoaded
    );
    const activeCategory: string = useSelector(
        (state: IDefaultStore) => state.activeCategory
    );

    return (
        <div className="wrapp">
            {isLoaded && (
                <>
                    <Header showBasket />
                    <Nav />
                    <main>
                        <div className="pizza-wrapp">
                            {pizza
                                .filter((pizza: IPizza) =>
                                    pizza.category.some(
                                        (category: string) =>
                                            category === activeCategory
                                    )
                                )
                                .map((pizza: IPizza) => (
                                    <PizzaBlock {...pizza} key={pizza.id} />
                                ))}
                        </div>
                    </main>
                </>
            )}
        </div>
    );
};

export default HomePage;
