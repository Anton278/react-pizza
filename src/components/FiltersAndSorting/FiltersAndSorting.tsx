import "./FiltersAndSorting.css";
import { useDispatch, useSelector } from "react-redux";
import Sort from "../Sort";
import { SET_ACTIVE_CATEGORY, IDefaultStore } from "../../reducerAndActions";

const FiltersAndSorting = () => {
    const dispatch = useDispatch();

    const categories: Array<string> = useSelector(
        (state: IDefaultStore) => state.categories
    );
    const activeCategory: string = useSelector(
        (state: IDefaultStore) => state.activeCategory
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
        </div>
    );
};

export default FiltersAndSorting;
