export interface IBasketItem {
    img: string;
    name: string;
    doughType: string;
    doughSize: string;
    id: number;
    amount: number;
    price: number;
}

export interface IPizza {
    name: string;
    price: {
        thinDough: {
            "26cm": number;
            "30cm": number;
            "40cm": number;
        };
        traditionalDough: {
            "26cm": number;
            "30cm": number;
            "40cm": number;
        };
    };
    img: string;
    category: Array<string>;
    popularity: number;
    id: number;
}
