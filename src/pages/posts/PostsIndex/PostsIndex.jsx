import style from "./PostsIndex.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import sectionsStyle from "../../Sections.module.css"
import { API_BASE_URI } from "../../../config.js"
import SearchBar from "../../../components/SearchBar/SearchBar.jsx"
import Card from "../../../components/Card/Card.jsx"


function PostsIndex() {

    const [posts, setPosts] = useState([])

    const [search, setSearch] = useState("")
    const [filteredPosts, setFilteredPosts] = useState([posts])

    //FETCH
    function fetchPosts() {
        axios.get(`${API_BASE_URI}posts`)
            .then((res) => {
                setPosts(res.data)
                setFilteredPosts(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])


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

    //Delete
    function deletePost(id) {
        axios.delete(`${API_BASE_URI}posts/${id}`)
            .then((res) => {
                fetchPosts()
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <>
            <main>
                <section className={sectionsStyle.title_section}>
                    <h1>Posts Page</h1>
                </section>
                <section className={sectionsStyle.search_section}>
                    <SearchBar search={search} handleSearch={handleSearch} filterPosts={filterPosts} />
                </section>
                <section className={sectionsStyle.cards_section}>
                    <div className="container">
                        <div className="row">
                            {filteredPosts.map((post, i) => (
                                <div key={i} className="col-4">
                                    <Card item={post} deleteItem={deletePost} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PostsIndex