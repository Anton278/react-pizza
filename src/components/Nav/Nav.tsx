import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Nav.css";
import {
    SET_ACTIVE_CATEGORY,
    SORT_BY_POPULARITY,
    SORT_BY_PRICE,
    SORT_BY_ALPHABET,
    SET_ACTIVE_SORT,
} from "../../actions";

const Nav = () => {
    const dispatch = useDispatch();
    const [showSelectBody, setShowSelectBody] = useState<boolean>(false);

    const categories: Array<string> = useSelector(
        (state: any) => state.categoriesReducer.categories
    );
    const activeCategory: string = useSelector(
        (state: any) => state.appReducer.activeCategory
    );
    const activeSort: string = useSelector(
        (state: any) => state.appReducer.activeSort
    );

    const sortTypes: Array<string> = ["популярности", "по цене", "по алфавиту"];

    const sortPizza = (e: any) => {
        if (e.target.innerText === sortTypes[0]) {
            dispatch({ type: SORT_BY_POPULARITY });
            dispatch({ type: SET_ACTIVE_SORT, payload: sortTypes[0] });
            setShowSelectBody((prevValue: boolean) => !prevValue);
        } else if (e.target.innerText === sortTypes[1]) {
            dispatch({ type: SORT_BY_PRICE });
            dispatch({ type: SET_ACTIVE_SORT, payload: sortTypes[1] });
            setShowSelectBody((prevValue: boolean) => !prevValue);
        } else if (e.target.innerText === sortTypes[2]) {
            dispatch({ type: SORT_BY_ALPHABET });
            dispatch({ type: SET_ACTIVE_SORT, payload: sortTypes[2] });
            setShowSelectBody((prevValue: boolean) => !prevValue);
        }
    };

    return (
        <nav>
            <div className="nav__categories">
                {categories.map((category: string) => {
                    const className =
                        category === activeCategory
                            ? "nav__category nav__category_active"
                            : "nav__category";
                    return (
                        <div
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
                        </div>
                    );
                })}
            </div>
            <div className="nav__sort">
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
                            {sortTypes.map((sortType: string) => {
                                const className =
                                    sortType === activeSort
                                        ? "custom-select__item custom-select__item_active"
                                        : "custom-select__item";
                                return (
                                    <div
                                        className={className}
                                        onClick={sortPizza}
                                        key={sortType}
                                    >
                                        {sortType}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
