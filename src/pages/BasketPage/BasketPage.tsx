import Header from "../../components/Header";
import EmptyBasket from "../../components/EmptyBasket";
import Basket from "../../components/Basket";
import { useSelector } from "react-redux";
import { IBasketItem } from "../../assets/types";

const BasketPage = () => {
    const basket: Array<IBasketItem> = useSelector(
        (state: any) => state.basketReducer
    );

    if (!basket.length) {
        return (
            <div className="wrapp">
                <Header showBasket={false} />
                <EmptyBasket />
            </div>
        );
    } else {
        return (
            <div className="wrapp">
                <Header showBasket={false} />
                <Basket />
            </div>
        );
    }
};

export default BasketPage;
