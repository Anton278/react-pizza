import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./asyncActions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);

    const rootEl = document.getElementById("root");
    rootEl?.addEventListener("click", (e) => {});

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/basket" element={<BasketPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
