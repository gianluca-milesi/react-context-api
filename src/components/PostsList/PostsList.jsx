import style from "./PostsList.module.css"
import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card"
import { useContext, useEffect } from "react"
import GlobalContext from "../../context/GlobalContext.js"

function PostsList() {

    const { posts, fetchPosts } = useContext(GlobalContext)

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            {/* <section className={sectionsStyle.search_section}>
                <SearchBar search={search} handleSearch={handleSearch} filterPosts={filterPosts} />
            </section> */}

            <div className="container">
                <div className="row">
                    <ul>
                        {posts.map((post, i) => (
                            <li key={i} className="col-4">
                                <Card item={post} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PostsList