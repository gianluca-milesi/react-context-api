import style from "./PostsPage.module.css"
//Components
import PostsList from "../../../components/PostsList/PostsList.jsx"


function PostsPage() {
    return (
        <>
            <main>
                <section className={style.title_section}>
                    <div className="container">
                        <h1>Posts Page</h1>
                    </div>
                </section>

                <section className={style.posts_section}>
                    <PostsList />
                </section>
            </main>
        </>
    )
}

export default PostsPage