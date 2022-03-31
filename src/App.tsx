import "./assets/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import BasketPage from "./components/BasketPage";
import { useState } from "react";

export type BasketItemType = {
    name: string;
    img: string;
    doughType: string;
    doughSize: string;
    priceForOne: number;
    amount: number;
};

const App = () => {
    const [basket, setBasket] = useState<Array<BasketItemType>>([]);
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainPage basket={basket} setBasket={setBasket} />}
                />
                <Route
                    path="/basket"
                    element={
                        <BasketPage basket={basket} setBasket={setBasket} />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
