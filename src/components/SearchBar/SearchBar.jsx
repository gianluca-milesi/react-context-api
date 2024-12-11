import style from "./SearchBar.module.css"

function SearchBar({ search, handleSearch, filterPosts }) {
    return (
        <div className={style.search_form}>
            <input type="text" placeholder="Cerca" className={style.search_bar} value={search} onChange={handleSearch} />
            <button className={style.button} onClick={filterPosts}>Cerca</button>
        </div>
    )
}

export default SearchBar