import { useState } from "react";
import "./Nav.css";

const Nav = () => {
    const [activeCategory, setActiveCategory] = useState<string>("Все");
    const [showSelectBody, setShowSelectBody] = useState<boolean>(false);
    const [activeFilter, setActiveFilter] = useState<string>("популярности");
    const categories: Array<string> = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ];
    const filters: Array<string> = ["популярности", "по цене", "по алфавиту"];
    return (
        <nav>
            <div className="nav__categories">
                {categories.map((category) => {
                    const className =
                        category === activeCategory
                            ? "nav__category nav__category_active"
                            : "nav__category";
                    return (
                        <div
                            className={className}
                            key={category}
                            onClick={(e: any) =>
                                setActiveCategory(e.target.innerText)
                            }
                        >
                            {category}
                        </div>
                    );
                })}
            </div>
            <div className="nav__filter">
                <img src="" alt="" />
                Сортировка по:
                <div className="select">
                    <div
                        className="select__header"
                        onClick={(e: any) => setShowSelectBody(!showSelectBody)}
                    >
                        популярности
                    </div>
                    {showSelectBody && (
                        <div className="select__body">
                            {filters.map((filter) => {
                                const className =
                                    filter === activeFilter
                                        ? "select__item select__item_active"
                                        : "select__item";
                                return (
                                    <div
                                        className={className}
                                        onClick={(e: any) =>
                                            setActiveFilter(e.target.innerText)
                                        }
                                    >
                                        {filter}
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
