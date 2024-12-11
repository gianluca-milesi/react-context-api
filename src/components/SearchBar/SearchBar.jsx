import style from "./SearchBar.module.css"
//Hooks
import { useContext } from "react"
//Context
import GlobalContext from "../../context/GlobalContext"

function SearchBar() {

    const { search, handleSearch, filterPosts } = useContext(GlobalContext)

    return (
        <div className={style.search_form}>
            <input type="text" placeholder="Cerca" className={style.search_bar} value={search} onChange={handleSearch} />
            <button className={style.button} onClick={filterPosts}>Cerca</button>
        </div>
    )
}

export default SearchBar