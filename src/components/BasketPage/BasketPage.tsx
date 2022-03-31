import "./BasketPage.scss";
import Header from "../Header";
import EmptyBasket from "../EmptyBasket";
import Basket from "../Basket";

const BasketPage = ({ basket, setBasket }: any) => {
    if (!basket.length) {
        return (
            <>
                <Header showBasket={false} />
                <EmptyBasket />
            </>
        );
    } else {
        return (
            <>
                <Header showBasket={false} />
                <Basket basket={basket} setBasket={setBasket} />
            </>
        );
    }
};

export default BasketPage;
