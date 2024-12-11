import { Outlet } from "react-router-dom"
import style from "./DefaultLayout.module.css"
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default DefaultLayout