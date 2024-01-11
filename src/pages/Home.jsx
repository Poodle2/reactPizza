import Sort from "../comtoments/Sort";
import SkeletonPizza from "../comtoments/pizzaBlock/SkeletonPizza";
import PizzaBlock from "../comtoments/pizzaBlock";
import {useEffect, useState} from "react";
import axios from "axios";
import Categories from "../comtoments/Categories";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [itemsPizza, setItemsPizza] = useState([])

    useEffect(() => {
        const getItems = async () => {
            try {
                let response = await axios.get('https://65985b4e668d248edf2481e2.mockapi.io/items-pizza')
                    .then(res => res.data);
                setItemsPizza(response)
                setIsLoading(!isLoading)
            } catch (error) {
                const message = `Винекла помилка ${error} `
                console.log(message)
            }
        }
        getItems()
    }, [])


    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading === true
                    ? [...new Array(6)].map((_, index) => <SkeletonPizza key={index}/>)
                    : itemsPizza.map(item => <PizzaBlock key={item.id} {...item}/>)}
            </div>
        </>
    )
}

export {Home}