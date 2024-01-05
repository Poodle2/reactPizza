import './scss/app.scss'

import axios from "axios";

import {Header} from "./comtoments/Header";
import Sort from "./comtoments/Sort";
import Categories from "./comtoments/Categories";
import PizzaBlock from "./pizza/PizzaBlock";
import {useEffect, useState} from "react";

function App() {

    const [pizzaItems, setPizzaItems] = useState([])

    const getItems = async () => {
        try {
            let response = await axios.get('https://65985b4e668d248edf2481e2.mockapi.io/items-pizza')
                .then(res => res.data);
            setPizzaItems(response)
        } catch (error) {
            const message = `Винекла помилка ${error} `
            console.log(message)
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzaItems.map(item => <PizzaBlock key={item.id}
                                                            {...item}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
