import style from "./Home.module.css"
import sectionsStyle from "../Sections.module.css"

function Home() {
    return (
        <main>
            <section className={sectionsStyle.title_section}>
                <h1>Home Page</h1>
            </section>
        </main>
    )
}

export default Home