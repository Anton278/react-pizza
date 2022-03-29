import icon from "./icon.png";
import "./EmptyBasket.scss";

const EmptyBasket = () => {
    return (
        <div className="empty-basket">
            <div className="empty-basket__title">
                Корзина пустая
                <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <path d="M0 32.24H32V0.24H0V32.24Z" fill="url(#pattern0)" />
                    <defs>
                        <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                        >
                            <use
                                xlinkHref="#image0_45_32"
                                transform="scale(0.015625)"
                            />
                        </pattern>
                        <image
                            id="image0_45_32"
                            width="64"
                            height="64"
                            xlinkHref="data:image/png;base64,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"
                        />
                    </defs>
                </svg>
            </div>
            <div className="empty-basket__subtitle">
                Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
                заказать пиццу, перейди на главную страницу.
            </div>
            <div className="empty-basket__img-wrapp">
                <img src={icon} alt="icon" className="empty-basket__img"></img>
            </div>

            <button className="empty-basket__btn">Вернуться назад</button>
        </div>
    );
};

export default EmptyBasket;
