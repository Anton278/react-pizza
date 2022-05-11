import { SET_CATEGORIES, SET_PIZZA, SET_IS_LOADING } from "./actions";

const API_URL = "https://my-json-server.typicode.com/Anton278/react-pizza";

export const getData = () => {
    return (dispatch: any) => {
        fetch(API_URL + "/db")
            .then((data) => data.json())
            .then((data) => {
                if ("pizza" in data && "categories" in data) {
                    dispatch({ type: SET_PIZZA, payload: data.pizza });
                    dispatch({
                        type: SET_CATEGORIES,
                        payload: data.categories,
                    });
                    dispatch({ type: SET_IS_LOADING, payload: false });
                }
            });
    };
};
