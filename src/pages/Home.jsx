import React, {useEffect, useState} from "react";

import axios from "axios";

import Sort from "../comtoments/Sort";
import SkeletonPizza from "../comtoments/pizzaBlock/SkeletonPizza";
import PizzaBlock from "../comtoments/pizzaBlock";
import Categories from "../comtoments/Categories";
import Pagination from "../comtoments/pagination";

import {useSelector, useDispatch} from "react-redux";
import {setCategoryId} from '../redux/slices/filterSlice'

const Home = () => {

    const searchValue = useSelector(state => state.searchReducer.searchValue)

    const {categoryId, sortType} = useSelector(state => state.filterReducer)

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)
    const [itemsPizza, setItemsPizza] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    useEffect(() => {

        const category = categoryId > 0 ? `&category=${categoryId}` : ''
        const sort = sortType.sortProperty.replace('-', '')
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
        const search = searchValue ? `&search=${searchValue}` : '?'

        const getItems = async () => {
            try {
                setIsLoading(true)
                let response = await axios.get(`https://65985b4e668d248edf2481e2.mockapi.io/items-pizza?page=${currentPage}&limit=6&${category}&sortBy=${sort}&order=${order}${search}`,)
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
    }, [categoryId, sortType, searchValue, currentPage])

    const skeleton = [...new Array(6)].map((_, index) => <SkeletonPizza key={index}/>)
    const items = itemsPizza.map(item => <PizzaBlock key={item.id} {...item}/>)

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                    <Sort/>
                </div>
                <h2 className="content__title">Усі піци</h2>
                <div className="content__items">
                    {isLoading === true ? skeleton : items}
                </div>
                <Pagination onChangePage={(number) => setCurrentPage(number)}/>
            </div>
        </>
    )
}

export {Home}