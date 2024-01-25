import {useEffect, useState} from "react";

const PizzaBlock = ({price, title, imageUrl, types, sizes}) => {

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    const [priceToSize, setPriceToSize] = useState(price)

    useEffect(() => {
        const priceSize = () => {

            if (activeType === 1 && activeSize === 0) {
                return setPriceToSize(price / 100 * 5 + price)
            }
            if (activeType === 1 && activeSize === 1) {
                return setPriceToSize(price / 100 * 15 + price)
            }
            if (activeType === 1 && activeSize === 2) {
                return setPriceToSize(price / 100 * 25 + price)
            }
            if (activeSize === 1) {
                return setPriceToSize(price / 100 * 10 + price)
            }
            if (activeSize === 2) {
                return setPriceToSize(price / 100 * 20 + price)
            }
            return setPriceToSize(price)
        }
        priceSize()
    }, [activeSize, activeType])


    const typeName = ['тонке', 'традиційне']

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map(typeIndex =>
                        <li key={typeIndex} onClick={() => setActiveType(typeIndex)}
                            className={activeType === typeIndex ? 'active' : ''}>
                            {typeName[typeIndex]}</li>)}
                </ul>
                <ul>
                    {sizes.map((size, index) =>
                        <li key={size} onClick={() => setActiveSize(index)}
                            className={activeSize === index ? 'active' : ''}>{size} см.</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {priceToSize} ₴</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Додати</span>
                    <i>0</i>
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock