import "./HomePage.css";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import PizzaBlock from "../../components/PizzaBlock";
// import { BasketItemType } from "../../App";
// import data from "../../assets/pizza.js";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPizza } from "../../assets/types";
import {
    SORT_BY_POPULARITY,
    SET_ACTIVE_SORT,
    SET_ACTIVE_CATEGORY,
} from "../../actions";

const HomePage = () => {
    const dispatch = useDispatch();
    const pizza: Array<IPizza> = useSelector(
        (state: any) => state.pizzaReducer
    );
    const isLoading: boolean = useSelector(
        (state: any) => state.appReducer.isLoading
    );
    const activeCategory: string = useSelector(
        (state: any) => state.appReducer.activeCategory
    );

    useEffect(() => {
        dispatch({ type: SORT_BY_POPULARITY });
        dispatch({ type: SET_ACTIVE_SORT, payload: "популярности" });
        dispatch({ type: SET_ACTIVE_CATEGORY, payload: "Все" });
    }, []);

    return (
        <div className="wrapp">
            {!isLoading && (
                <>
                    <Header showBasket />
                    <Nav />
                    <main>
                        <div className="main__title">Все пиццы</div>
                        <div className="main__pizza-wrapp">
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
