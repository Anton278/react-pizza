import { IPizza } from "./assets/types";
import {
    SET_CATEGORIES,
    SET_PIZZA,
    SET_IS_LOADED,
    SET_ACTIVE_CATEGORY,
} from "./reducerAndActions";

const API_URL = "https://my-json-server.typicode.com/Anton278/react-pizza";

interface IData {
    pizza: Array<IPizza>;
    categories: Array<string>;
}

export const getData = () => {
    return (dispatch: any) => {
        fetch(API_URL + "/db")
            .then((data) => data.json())
            .then((data: IData) => {
                if ("pizza" in data && "categories" in data) {
                    dispatch({ type: SET_PIZZA, payload: data.pizza });
                    dispatch({
                        type: SET_CATEGORIES,
                        payload: data.categories,
                    });
                    dispatch({
                        type: SET_ACTIVE_CATEGORY,
                        payload: data.categories[0],
                    });
                    dispatch({ type: SET_IS_LOADED, payload: true });
                }
            });
    };
};
