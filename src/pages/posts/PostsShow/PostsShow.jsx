import style from "./PostsShow.module.css"
import placeholder from "../../../assets/placeholder.png"
//Axios
import axios from "axios"
import { API_BASE_URI } from "../../../config"
//Hooks
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
//Components
import Tags from "../../../components/Tags/Tags.jsx"


function PostsShow() {

    const { id } = useParams()
    const [post, setPost] = useState({})
    const { title, image, content, tags = [], category } = post

    //FETCH
    function fetchPost() {
        axios.get(`${API_BASE_URI}posts/${id}`)
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPost()
    }, [id])

    //NAVIGATE
    const navigate = useNavigate()

    function goToPosts() {
        navigate(`/posts`)
    }

    function goBack() {
        let backId = parseInt(id) - 1
        navigate(`/posts/${backId}`)
    }

    function goForward() {
        let nextId = parseInt(id) + 1
        navigate(`/posts/${nextId}`)
    }


    return (
        <main>
            <section className={style.hero_section}>
                <figure className={style.hero_figure}>
                    <button className={style.back_to_post_button} onClick={goToPosts}>&larr; Torna ai posts</button>
                    <img className={style.post_figure} src={`${API_BASE_URI}${image}` || placeholder} />
                </figure>
            </section>

            <section className={style.information_section}>
                <div className="container">
                    <div className={style.information_body}>
                        <div className={style.description}>
                            <h1>{title}</h1>
                            <p>{content}</p>
                        </div>
                        <div className={style.categories}>
                            <Tags tags={tags} />
                            <p>Difficoltà: <span className={category === "difficile" ? style.difficile : style.facile}>{category}</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.pages_section}>
                <div className={style.pages}>
                    <button onClick={goBack}>&larr;</button>
                    <button onClick={goForward}>&rarr;</button>
                </div>
            </section>
        </main>
    )
}

export default PostsShow