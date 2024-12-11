import style from "./Card.module.css"
import { API_BASE_URI } from "../../config.js"
import { Link } from "react-router-dom"
import GlobalContext from "../../context/GlobalContext.js"
import { useContext } from "react"


function Card({ item = {} }) {

    const { id, title, image, content } = item
    const { deletePost } = useContext(GlobalContext)

    return (
        <div className={style.card}>
            <Link to={`/posts/${id}`}>
                <img src={`${API_BASE_URI}${image}`} className={style.card_figure} />
                <div className={style.card_body}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </Link>
            <button className={style.delete_button} onClick={() => deletePost(id)}>Elimina</button>
        </div>
    )
}

export default Card