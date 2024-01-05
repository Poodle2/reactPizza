import {useState} from "react";

const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const arrayCategories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    return (
        <div className="categories">
            <ul>
                {arrayCategories.map((el, index) =>
                    <li key={index} onClick={() => setActiveIndex(index)} className={activeIndex === index ? 'active' : ''}>{el}</li>)}
            </ul>
        </div>
    )
}

export default Categories