import "./FiltersAndSorting.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sort from "../Sort";
import {
    SET_ACTIVE_CATEGORY,
    SORT_PIZZA_BY_POPULARITY,
    SORT_PIZZA_BY_PRICE,
    SORT_PIZZA_BY_ALPHABET,
    IDefaultStore,
} from "../../reducerAndActions";

const FiltersAndSorting = () => {
    const dispatch = useDispatch();

    const categories: Array<string> = useSelector(
        (state: IDefaultStore) => state.categories
    );
    const activeCategory: string = useSelector(
        (state: IDefaultStore) => state.activeCategory
    );
    const activeSort: string = useSelector(
        (state: IDefaultStore) => state.activeSort
    );

    return (
        <div className="col">
            <ul className="col__categories">
                {categories.map((category: string) => {
                    const className =
                        category === activeCategory
                            ? "col__category col__category_active"
                            : "col__category";
                    return (
                        <li
                            className={className}
                            key={category}
                            onClick={(e: any) =>
                                dispatch({
                                    type: SET_ACTIVE_CATEGORY,
                                    payload: e.target.innerText,
                                })
                            }
                        >
                            {category}
                        </li>
                    );
                })}
            </ul>
            <Sort />
            {/* <div className="nav__sort">
                Сортировка по: &nbsp;
                <div className="custom-select">
                    <div
                        className="custom-select__header"
                        onClick={() =>
                            setShowSelectBody(
                                (prevValue: boolean) => !prevValue
                            )
                        }
                    >
                        {activeSort}
                    </div>
                    {showSelectBody && (
                        <div className="custom-select__body">
                            <div
                                className={
                                    activeSort === "популярности"
                                        ? "custom-select__item custom-select__item_active"
                                        : "custom-select__item"
                                }
                                onClick={() =>
                                    dispatch({ type: SORT_PIZZA_BY_POPULARITY })
                                }
                            >
                                популярности
                            </div>
                            <div
                                className={
                                    activeSort === "цене"
                                        ? "custom-select__item custom-select__item_active"
                                        : "custom-select__item"
                                }
                                onClick={() =>
                                    dispatch({ type: SORT_PIZZA_BY_PRICE })
                                }
                            >
                                цене
                            </div>
                            <div
                                className={
                                    activeSort === "алфавиту"
                                        ? "custom-select__item custom-select__item_active"
                                        : "custom-select__item"
                                }
                                onClick={() =>
                                    dispatch({ type: SORT_PIZZA_BY_ALPHABET })
                                }
                            >
                                алфавиту
                            </div>
                        </div>
                    )}
                </div>
            </div> */}
        </div>
    );
};

export default FiltersAndSorting;
