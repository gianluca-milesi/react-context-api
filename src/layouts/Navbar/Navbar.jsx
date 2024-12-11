import style from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className={style.navbar}>
                <ul className={style.main_menu}>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="posts/create-post">Create</NavLink></li>
                </ul>
            </nav >
        </>
    )
}

export default Navbar