import style from './Search.module.scss'
import search from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";

import {useSelector, useDispatch} from "react-redux";
import {setSearchValue} from '../../redux/slices/searchSlice'

const Search = () => {

    const searchValue = useSelector(state => state.searchReducer.searchValue)
    const dispatch = useDispatch()

    return (
        <div className={style.root}>
            <img className={style.searchIcon} src={search} alt='Search'/>
            <input className={style.input}
                   value={searchValue}
                   placeholder='Пошук піц...'
                   onChange={(event) => dispatch(setSearchValue(event.target.value))}
            />
            {searchValue && <img className={style.closeIcon}
                                 src={close}
                                 alt='close'
                                 onClick={() => dispatch(setSearchValue(''))}/>}
        </div>

    )
}
export default Search