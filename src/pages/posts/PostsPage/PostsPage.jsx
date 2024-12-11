import style from "./PostsPage.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import sectionsStyle from "../../Sections.module.css"
import { API_BASE_URI } from "../../../config.js"
import PostsList from "../../../components/PostsList/PostsList.jsx"


function PostsPage() {


    // //Search&Filter
    // const [search, setSearch] = useState("")
    // const [filteredPosts, setFilteredPosts] = useState([posts])


    // //HANDLERS
    // //Search
    // function handleSearch(event) {
    //     const value = event.target.value
    //     setSearch(value)
    //     // console.log(value)
    //     if (value === "") {
    //         setFilteredPosts(posts)
    //     }
    // }


    // //FUNCTIONS
    // //Filter
    // function filterPosts() {
    //     const filtered = posts.filter((post) =>
    //         post.title.toLowerCase().includes(search.toLowerCase())
    //     );
    //     setFilteredPosts(filtered);
    // }

    // //Delete
    // function deletePost(id) {
    //     axios.delete(`${API_BASE_URI}posts/${id}`)
    //         .then((res) => {
    //             fetchPosts()
    //         })
    //         .catch((err) => {
    //             console.error(err)
    //         })
    // }


    return (
        <>
            <main>
                <section className={sectionsStyle.title_section}>
                    <h1>Posts Page</h1>
                </section>



                <section className={sectionsStyle.posts_list}>
                    <PostsList />
                </section>
            </main>
        </>
    )
}

export default PostsPage