import { IBasketItem, IPizza } from "./assets/types";
import { Action, IAmountManipulation } from "./actionTypes";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PIZZA = "SET_PIZZA";
export const SET_IS_LOADED = "SET_IS_LOADED";
export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";
export const ADD_PIZZA_TO_BASKET = "ADD_PIZZA_TO_BASKET";
export const CLEAR_BASKET = "CLEAR_BASKET";
export const ADD_PIZZA_AMOUNT_IN_BASKET = "ADD_PIZZA_AMOUNT_IN_BASKET";
export const REMOVE_PIZZA_AMOUNT_IN_BASKET = "REMOVE_PIZZA_AMOUNT_IN_BASKET";
export const SORT_PIZZA_BY_PRICE = "SORT_PIZZA_BY_PRICE";
export const SORT_PIZZA_BY_ALPHABET = "SORT_PIZZA_BY_ALPHABET";
export const SORT_PIZZA_BY_POPULARITY = "SORT_PIZZA_BY_POPULARITY";
export const SET_ACTIVE_SORT = "SET_ACTIVE_SORT";

const addPizzaToBasket = (
    state: Array<IBasketItem>,
    payload: IBasketItem
): Array<IBasketItem> => {
    let isTheSamePizzaFound: boolean = false;
    const newState: Array<IBasketItem> = state.map((pizza: IBasketItem) => {
        if (
            pizza.id === payload.id &&
            pizza.doughSize === payload.doughSize &&
            pizza.doughType === payload.doughType
        ) {
            isTheSamePizzaFound = true;
            return { ...pizza, amount: pizza.amount + 1 };
        } else {
            return pizza;
        }
    });
    return isTheSamePizzaFound ? newState : [...state, payload];
};
const addPizzaAmountInBasket = (
    state: Array<IBasketItem>,
    payload: IAmountManipulation
): Array<IBasketItem> => {
    return state.map((pizza: IBasketItem) => {
        if (
            pizza.id === payload.id &&
            pizza.doughSize === payload.doughSize &&
            pizza.doughType === pizza.doughType
        ) {
            return { ...pizza, amount: pizza.amount + 1 };
        } else {
            return pizza;
        }
    });
};
const removePizzaAmountInBasket = (
    state: Array<IBasketItem>,
    payload: IAmountManipulation
): Array<IBasketItem> => {
    /* The filtering method is needed in the case
    when the number of pizzas is 1
    to remove this item from the cart */
    let isPizzaAmountEqualOne: boolean = false;
    const newState = state.map((pizza: IBasketItem) => {
        if (
            pizza.id === payload.id &&
            pizza.doughType === payload.doughType &&
            pizza.doughSize === payload.doughSize
        ) {
            if (pizza.amount === 1) {
                isPizzaAmountEqualOne = true;
                return pizza;
            } else {
                return { ...pizza, amount: pizza.amount - 1 };
            }
        } else {
            return pizza;
        }
    });

    if (isPizzaAmountEqualOne) {
        return state.filter((pizza: IBasketItem) => {
            if (
                pizza.id === payload.id &&
                pizza.doughType === payload.doughType &&
                pizza.doughSize === payload.doughSize
            ) {
                return false;
            } else {
                return true;
            }
        });
    } else {
        return newState;
    }
};

export interface IDefaultStore {
    pizza: Array<IPizza>;
    basket: Array<IBasketItem>;
    categories: Array<string>;
    activeCategory: string;
    activeSort: string;
    isLoaded: boolean;
}

const defaultState: IDefaultStore = {
    pizza: [],
    basket: [],
    categories: [],
    activeCategory: "",
    activeSort: "популярности",
    isLoaded: false,
};

export const appReducer = (
    state = defaultState,
    action: Action
): IDefaultStore => {
    switch (action.type) {
        case SET_PIZZA:
            return { ...state, pizza: [...action.payload] };
        case SET_CATEGORIES:
            return { ...state, categories: [...action.payload] };
        case SET_ACTIVE_CATEGORY:
            return { ...state, activeCategory: action.payload };
        case SORT_PIZZA_BY_POPULARITY:
            return {
                ...state,
                pizza: state.pizza
                    .slice()
                    .sort(
                        (pizza1: IPizza, pizza2: IPizza) =>
                            pizza2.popularity - pizza1.popularity
                    ),
                activeSort: "популярности",
            };
        case SORT_PIZZA_BY_PRICE:
            return {
                ...state,
                pizza: state.pizza
                    .slice()
                    .sort(
                        (pizza1: IPizza, pizza2: IPizza) =>
                            pizza1.price.thinDough["26cm"] -
                            pizza2.price.thinDough["26cm"]
                    ),
                activeSort: "цене",
            };
        case SORT_PIZZA_BY_ALPHABET:
            return {
                ...state,
                pizza: state.pizza
                    .slice()
                    .sort((pizza1: IPizza, pizza2: IPizza) => {
                        if (pizza1.name > pizza2.name) {
                            return 1;
                        }
                        if (pizza1.name < pizza2.name) {
                            return -1;
                        }
                        return 0;
                    }),
                activeSort: "алфавиту",
            };
        case SET_IS_LOADED:
            return { ...state, isLoaded: action.payload };
        case CLEAR_BASKET:
            return { ...state, basket: [] };
        case ADD_PIZZA_TO_BASKET:
            return {
                ...state,
                basket: addPizzaToBasket(state.basket, action.payload),
            };
        case ADD_PIZZA_AMOUNT_IN_BASKET:
            return {
                ...state,
                basket: addPizzaAmountInBasket(state.basket, action.payload),
            };
        case REMOVE_PIZZA_AMOUNT_IN_BASKET:
            return {
                ...state,
                basket: removePizzaAmountInBasket(state.basket, action.payload),
            };
        default:
            return state;
    }
};
