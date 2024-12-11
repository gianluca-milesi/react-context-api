import style from "./PostsStore.module.css"
import placeholder from "../../../assets/placeholder.png"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { API_BASE_URI } from "../../../config"


const initialFormData = {
    title: "",
    image: undefined,
    content: "",
    tags: "",
    category: "",
    published: false
}

function PostsStore() {

    const [formData, setFormData] = useState(initialFormData)

    //HANDLERS
    function handleFormData(event) {
        const key = event.target.name
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value

        setFormData({
            ...formData,
            [key]: value
        })
    }

    const navigate = useNavigate()

    //SUBMIT
    function submit(event) {
        event.preventDefault()

        const body = {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim())
        }

        axios.post(`${API_BASE_URI}posts`, body)
            .then((res) => {
                const newPost = res.data
                navigate(`/posts/${newPost.id}`) // slash all'inizio per partire dalla root
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <main className={style.store_main}>
            <section>
                <div className="container">
                    <form onSubmit={submit}>
                        <h3 className={style.form_title}>Crea un nuovo Post</h3>
                        <div className={style.form_field}>
                            <label htmlFor="title">Titolo</label>
                            <input name="title" type="text" placeholder="Inserisci il titolo" className={style.input_item} onChange={handleFormData} value={formData.title} />
                        </div>
                        <div className={style.form_field}>
                            <label htmlFor="tags">Tags</label>
                            <input name="tags" type="text" placeholder="Inserisci i tags" className={style.input_item} onChange={handleFormData} value={formData.tags} />
                        </div>
                        <div className={style.form_field}>
                            <label htmlFor="tags">Immagine</label>
                            <input name="image" type="text" placeholder="Inserisci l'immagine" className={style.input_item} onChange={handleFormData} value={formData.image} />
                        </div>
                        <div className={style.form_field}>
                            <label htmlFor="tags">Descrizione</label>
                            <input name="content" type="text" placeholder="Inserisci la descrizione" className={style.input_item} onChange={handleFormData} value={formData.content} />
                        </div>
                        <div className={style.form_field}>
                            <label htmlFor="category">Categoria</label>
                            <select name="category" className={style.input_item_select} onChange={handleFormData} value={formData.category}>
                                <option value="">Seleziona una categoria</option>
                                <option value="facile">Facile</option>
                                <option value="difficile">Difficile</option>
                            </select>
                        </div>
                        <div className={style.form_published_field}>
                            <label htmlFor="tags">Pubblica</label>
                            <input name="published" type="checkbox" className={style.input_item_checkbox} onChange={handleFormData} checked={formData.published} />
                        </div>
                        <input type="submit" className={style.submit} value="Aggiungi" />
                    </form>
                </div>
            </section>
        </main>
    )
}

export default PostsStore