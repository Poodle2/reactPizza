import './scss/app.scss'

import {Header} from "./comtoments/Header";
import Sort from "./comtoments/Sort";
import Categories from "./comtoments/Categories";
import PizzaBlock from "./pizza/PizzaBlock";

import pizza from './assets/pizza.json'

function App() {

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
                        {pizza.map(item => <PizzaBlock key={item.id}
                                                     {...item}
                        />)}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
