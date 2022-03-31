// This file emulates the data, received from the server.

import asianShrimpPizza from "./images/asian-shrimp-pizza.svg";
import cheeseChickenPizza from "./images/cheese-chicken-pizza.svg";
import cheeseburgerPizza from "./images/cheeseburger-pizza.svg";
import cheesyPizza from "./images/cheesy-pizza.svg";

export default [
    {
        name: "Чизбургер-пицца",
        img: cheeseburgerPizza,
        prices: {
            thinDough: {
                "26cm": 200,
                "30cm": 300,
                "40cm": 500,
            },
            traditionalDough: {
                "26cm": 230,
                "30cm": 330,
                "40cm": 530,
            },
        },
    },
    {
        name: "Сырная",
        img: cheesyPizza,
        prices: {
            thinDough: {
                "26cm": 225,
                "30cm": 325,
                "40cm": 525,
            },
            traditionalDough: {
                "26cm": 255,
                "30cm": 355,
                "40cm": 555,
            },
        },
    },
    {
        name: "Креветки по-азиатски",
        img: asianShrimpPizza,
        prices: {
            thinDough: {
                "26cm": 150,
                "30cm": 200,
                "40cm": 300,
            },
            traditionalDough: {
                "26cm": 175,
                "30cm": 225,
                "40cm": 325,
            },
        },
    },
    {
        name: "Сырный цыпленок",
        img: cheeseChickenPizza,
        prices: {
            thinDough: {
                "26cm": 200,
                "30cm": 300,
                "40cm": 500,
            },
            traditionalDough: {
                "26cm": 230,
                "30cm": 330,
                "40cm": 530,
            },
        },
    },
];
