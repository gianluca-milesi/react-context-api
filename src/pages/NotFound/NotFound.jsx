import style from "./NotFound.module.css"
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main>
            <section>
                <div className={style.not_found_body}>
                    <h1>404 <span>Pagina non trovata</span></h1>
                    <Link className={style.link} to="/" >Torna alla Home</Link>
                </div>
            </section>
        </main>
    )
}

export default NotFound