const Categories = ({value, onChangeCategory}) => {

    const categories = [
        'Усі',
        'Мясні',
        'Вегетаріанська',
        'Гриль',
        'Гострі',
        'Кальцоне'
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map((categoriesElement, i) =>
                    <li key={i}
                        onClick={() => onChangeCategory(i)}
                        className={value === i ? 'active' : ''}>
                        {categoriesElement}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Categories