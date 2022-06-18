import "./HomePage.css";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import PizzaBlock from "../../components/PizzaBlock";
import { useSelector } from "react-redux";
import { IPizza } from "../../assets/types";

const HomePage = () => {
    const pizza: Array<IPizza> = useSelector(
        (state: any) => state.pizzaReducer
    );
    const isLoading: boolean = useSelector(
        (state: any) => state.appReducer.isLoading
    );
    const activeCategory: string = useSelector(
        (state: any) => state.appReducer.activeCategory
    );

    return (
        <div className="wrapp">
            {!isLoading && (
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
