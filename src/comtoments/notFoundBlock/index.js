import style from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div h1 className={style.root}>
            <h1>
                <samp>😞</samp>
                <br/>
                Нічого не найдено
            </h1>
            <p className={style.description}>
                Нажаль даної сторінки не існує у нашому інтернет магазині
            </p>
        </div>

    )
}

export {NotFoundBlock}