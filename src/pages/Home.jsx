import Sort from "../comtoments/Sort";
import SkeletonPizza from "../comtoments/pizzaBlock/SkeletonPizza";
import PizzaBlock from "../comtoments/pizzaBlock";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Categories from "../comtoments/Categories";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [itemsPizza, setItemsPizza] = useState([])
    const [sortType, setSortType] = useState({
        name: 'популярності',
        sortProperty: 'rating'
    })
    const [categoryId, setCategoryId] = useState(0)


    useEffect(() => {

        const category = categoryId > 0 ? `?category=${categoryId}`: '?'
        const sort = sortType.sortProperty.replace('-', '')
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

        const getItems = async () => {
            try {
                setIsLoading(true)
                let response = await axios.get(`https://65985b4e668d248edf2481e2.mockapi.io/items-pizza${category}}?&sortBy=${sort}&order=${order}`,)
                    .then(res => res.data);
                setItemsPizza(response)
                setIsLoading(false)
            } catch (error) {
                const message = `Винекла помилка ${error} `
                console.log(message)
            }
        }
        window.scrollTo(0, 0);
        getItems()
    }, [categoryId, sortType])


    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)}/>
                    <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
                </div>
                <h2 className="content__title">Усі піци</h2>
                <div className="content__items">
                    {isLoading === true
                        ? [...new Array(6)].map((_, index) => <SkeletonPizza key={index}/>)
                        : itemsPizza.map(item => <PizzaBlock key={item.id} {...item}/>)}
                </div>
            </div>
        </>
    )
}

export {Home}