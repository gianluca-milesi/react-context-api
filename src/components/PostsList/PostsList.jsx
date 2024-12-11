import style from "./PostsList.module.css"
import sectionsStyle from "../../pages/Sections.module.css"
import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../context/GlobalContext.js"

function PostsList() {

    const { posts, fetchPosts } = useContext(GlobalContext)

    //Search&Filter
    const [search, setSearch] = useState("")
    const [filteredPosts, setFilteredPosts] = useState([])

    useEffect(() => {
        setFilteredPosts(posts);
    }, [posts]);

    //HANDLERS
    //Search
    function handleSearch(event) {
        const value = event.target.value
        setSearch(value)
        // console.log(value)
        if (value === "") {
            setFilteredPosts(posts)
        }
    }

    //FUNCTIONS
    //Filter
    function filterPosts() {
        const filtered = posts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredPosts(filtered);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <section className={sectionsStyle.search_section}>
                <SearchBar search={search} handleSearch={handleSearch} filterPosts={filterPosts} />
            </section>

            <section>
                <div className="container">
                    <ul className="row">
                        {filteredPosts.map((post, i) => (
                            <li key={i} className="col-4">
                                <Card item={post} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default PostsList