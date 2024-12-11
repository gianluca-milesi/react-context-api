import style from "./PostsList.module.css"
//Hooks
import { useContext, useEffect } from "react"
//Context
import GlobalContext from "../../context/GlobalContext.js"
//Components
import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card"


function PostsList() {

    const { posts, fetchPosts, search, filteredPosts, handleSearch, filterPosts } = useContext(GlobalContext)

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <div className={style.posts_list}>
            <div className="container">
                <SearchBar search={search} handleSearch={handleSearch} filterPosts={filterPosts} />
            </div>

            <div className="container">
                <ul className="row">
                    {filteredPosts.map((post, i) => (
                        <li key={i} className="col-4">
                            <Card item={post} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PostsList