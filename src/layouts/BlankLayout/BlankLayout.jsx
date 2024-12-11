import style from "./BlankLayout.module.css"
import { Outlet } from "react-router-dom";

function BlankLayout() {
    return (
        <div className="blank-layout">
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default BlankLayout