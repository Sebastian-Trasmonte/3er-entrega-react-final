import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function LayOut() {

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )

}

export default LayOut