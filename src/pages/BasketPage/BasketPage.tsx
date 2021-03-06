import Header from "../../components/Header";
import EmptyBasket from "../../components/EmptyBasket";
import Basket from "../../components/Basket";
import { useSelector } from "react-redux";
import { IBasketItem } from "../../assets/types";
import { IDefaultStore } from "../../reducerAndActions";

const BasketPage = () => {
    const basket: Array<IBasketItem> = useSelector(
        (state: IDefaultStore) => state.basket
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
