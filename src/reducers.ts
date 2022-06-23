import {
    SET_CATEGORIES,
    SET_PIZZA,
    SET_IS_LOADING,
    SET_ACTIVE_CATEGORY,
    ADD_ITEM_TO_BASKET,
    CLEAR_BASKET,
    ADD_ITEM_AMOUNT_IN_BASKET,
    DECREASE_ITEM_AMOUNT_IN_BASKET,
    DELETE_ITEM,
    SORT_BY_PRICE,
    SORT_BY_ALPHABET,
    SORT_BY_POPULARITY,
    SET_ACTIVE_SORT,
} from "./actions";
import { IBasketItem, IPizza } from "./assets/types";

interface IDefaultPizzaReducerState {
    pizza: Array<IPizza>;
    categories: Array<string>;
    activeCategory: string;
    activeSort: "популярности" | "цене" | "алфавиту";
}
const defaultPizzaReducerState: IDefaultPizzaReducerState = {
    pizza: [],
    categories: [],
    activeCategory: "Все",
    activeSort: "популярности",
};
export const pizzaReducer = (state = defaultPizzaReducerState, action: any) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case SET_PIZZA:
            return { ...state, pizza: action.payload };
        case SORT_BY_PRICE:
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
        case SORT_BY_ALPHABET:
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
        case SORT_BY_POPULARITY:
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
        case SET_ACTIVE_CATEGORY:
            return { ...state, activeCategory: action.payload };
        default:
            return state;
    }
};

export const appReducer = (
    state = {
        isLoading: false,
    },
    action: any
) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

const addItemToBasket = (state: Array<IBasketItem>, action: any) => {
    const isTheSamePizzaExist: boolean = state.some((pizza: IBasketItem) => {
        if (
            pizza.id === action.payload.id &&
            pizza.doughType === action.payload.doughType &&
            pizza.doughSize === action.payload.doughSize
        ) {
            return true;
        } else {
            return false;
        }
    });
    if (isTheSamePizzaExist) {
        return state.map((pizza: IBasketItem) => {
            if (
                pizza.id === action.payload.id &&
                pizza.doughType === action.payload.doughType &&
                pizza.doughSize === action.payload.doughSize
            ) {
                return { ...pizza, amount: pizza.amount + 1 };
            } else {
                return pizza;
            }
        });
    } else {
        return [...state, action.payload];
    }
};
const addItemAmount = (state: Array<IBasketItem>, action: any) => {
    return state.map((pizza: IBasketItem) => {
        if (
            pizza.id === action.payload.id &&
            pizza.doughType === action.payload.doughType &&
            pizza.doughSize === action.payload.doughSize
        ) {
            return { ...pizza, amount: pizza.amount + 1 };
        } else {
            return pizza;
        }
    });
};
const decreaseItemAmount = (state: Array<IBasketItem>, action: any) => {
    return state.map((pizza: IBasketItem) => {
        if (
            pizza.id === action.payload.id &&
            pizza.doughType === action.payload.doughType &&
            pizza.doughSize === action.payload.doughSize
        ) {
            return { ...pizza, amount: pizza.amount - 1 };
        } else {
            return pizza;
        }
    });
};
export const basketReducer = (state: Array<IBasketItem> = [], action: any) => {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            return addItemToBasket(state, action);
        case CLEAR_BASKET:
            return [];
        case ADD_ITEM_AMOUNT_IN_BASKET:
            return addItemAmount(state, action);
        case DECREASE_ITEM_AMOUNT_IN_BASKET:
            return decreaseItemAmount(state, action);
        case DELETE_ITEM:
            return state.filter((pizza: IBasketItem) => {
                if (
                    pizza.id === action.payload.id &&
                    pizza.doughType === action.payload.doughType &&
                    pizza.doughSize === action.payload.doughSize
                ) {
                    return false;
                } else {
                    return true;
                }
            });
        default:
            return state;
    }
};
