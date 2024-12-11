import style from "./PostsList.module.css"
import sectionsStyle from "../../pages/Sections.module.css"
import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../context/GlobalContext.js"
import axios from "axios"
import { API_BASE_URI } from "../../config.js"

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

    //Delete
    function deletePost(id) {
        axios.delete(`${API_BASE_URI}posts/${id}`)
            .then(() => {
                fetchPosts()
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div className={style.posts_list}>
            <div className="container">
                <SearchBar search={search} handleSearch={handleSearch} filterPosts={filterPosts} />
            </div>

            <div className="container">
                <ul className="row">
                    {filteredPosts.map((post, i) => (
                        <li key={i} className="col-4">
                            <Card item={post} deleteItem={deletePost} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PostsList