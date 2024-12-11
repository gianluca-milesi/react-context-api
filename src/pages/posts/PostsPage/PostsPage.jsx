import style from "./PostsPage.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import sectionsStyle from "../../Sections.module.css"
import { API_BASE_URI } from "../../../config.js"
import PostsList from "../../../components/PostsList/PostsList.jsx"


function PostsPage() {
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