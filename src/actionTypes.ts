import { IBasketItem, IPizza } from "./assets/types";
import {
    ADD_PIZZA_AMOUNT_IN_BASKET,
    ADD_PIZZA_TO_BASKET,
    CLEAR_BASKET,
    REMOVE_PIZZA_AMOUNT_IN_BASKET,
    SET_ACTIVE_CATEGORY,
    SET_CATEGORIES,
    SET_IS_LOADED,
    SET_PIZZA,
    SORT_PIZZA_BY_ALPHABET,
    SORT_PIZZA_BY_POPULARITY,
    SORT_PIZZA_BY_PRICE,
} from "./reducerAndActions";

interface ISetPizzaAction {
    type: typeof SET_PIZZA;
    payload: Array<IPizza>;
}
interface ISetCategoriesAction {
    type: typeof SET_CATEGORIES;
    payload: Array<string>;
}
interface ISetActiveCategory {
    type: typeof SET_ACTIVE_CATEGORY;
    payload: string;
}
interface ISortPizzaByPopularity {
    type: typeof SORT_PIZZA_BY_POPULARITY;
}
interface ISortPizzaByPrice {
    type: typeof SORT_PIZZA_BY_PRICE;
}
interface ISortPizzaByAlphabet {
    type: typeof SORT_PIZZA_BY_ALPHABET;
}
interface ISetIsLoaded {
    type: typeof SET_IS_LOADED;
    payload: boolean;
}
interface IClearBasket {
    type: typeof CLEAR_BASKET;
}
interface IAddPizzaToBAsket {
    type: typeof ADD_PIZZA_TO_BASKET;
    payload: IBasketItem;
}
export interface IAmountManipulation {
    id: number;
    doughType: string;
    doughSize: string;
}
interface IAddPizzaAmountInBasket {
    type: typeof ADD_PIZZA_AMOUNT_IN_BASKET;
    payload: IAmountManipulation;
}
interface IRemovePizzaAmountInBasket {
    type: typeof REMOVE_PIZZA_AMOUNT_IN_BASKET;
    payload: IAmountManipulation;
}

export type Action =
    | ISetPizzaAction
    | ISetCategoriesAction
    | ISetActiveCategory
    | ISortPizzaByPopularity
    | ISortPizzaByPrice
    | ISortPizzaByAlphabet
    | ISetIsLoaded
    | IClearBasket
    | IAddPizzaToBAsket
    | IAddPizzaAmountInBasket
    | IRemovePizzaAmountInBasket;
