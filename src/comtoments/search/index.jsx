import style from './Search.module.scss'
import search from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";

import {useContext} from "react";
import {AppContext} from "../../App";

const Search = () => {

    const {searchValue, setSearchValue} = useContext(AppContext)

    return (
        <div className={style.root}>
            <img className={style.searchIcon} src={search} alt='Search'/>
            <input className={style.input}
                   value={searchValue}
                   placeholder='Пошук піц...'
                   onChange={(event) => setSearchValue(event.target.value)}
            />
            {searchValue && <img className={style.closeIcon}
                                 src={close}
                                 alt='close'
                                 onClick={() => setSearchValue('')}/>}
        </div>

    )
}
export default Search