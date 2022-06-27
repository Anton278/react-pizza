import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    IDefaultStore,
    SORT_PIZZA_BY_POPULARITY,
    SORT_PIZZA_BY_PRICE,
    SORT_PIZZA_BY_ALPHABET,
} from "../../reducerAndActions";
import "./Sort.scss";

const Sort = () => {
    const dispatch = useDispatch();
    const [showBody, setShowBody] = useState<boolean>(true);

    const activeSort: string = useSelector(
        (state: IDefaultStore) => state.activeSort
    );

    return (
        <div className="sort">
            Сортировка по:{" "}
            <span
                className="sort__head"
                onClick={() => setShowBody((prevValue: boolean) => !prevValue)}
            >
                {activeSort}
            </span>
            {showBody && (
                <ul className="sort__body">
                    <li
                        onClick={() => {
                            dispatch({ type: SORT_PIZZA_BY_POPULARITY });
                            setShowBody(false);
                        }}
                        className={
                            activeSort === "популярности"
                                ? "sort__item sort__item_active"
                                : "sort__item"
                        }
                    >
                        популярности
                    </li>
                    <li
                        onClick={() => {
                            dispatch({ type: SORT_PIZZA_BY_PRICE });
                            setShowBody(false);
                        }}
                        className={
                            activeSort === "цене"
                                ? "sort__item sort__item_active"
                                : "sort__item"
                        }
                    >
                        цене
                    </li>
                    <li
                        onClick={() => {
                            dispatch({ type: SORT_PIZZA_BY_ALPHABET });
                            setShowBody(false);
                        }}
                        className={
                            activeSort === "алфавиту"
                                ? "sort__item sort__item_active"
                                : "sort__item"
                        }
                    >
                        алфавиту
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Sort;
