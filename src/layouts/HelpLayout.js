import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout() {
    return (
        <div className="help-layout">
        <h2>Website Help</h2>
        <p>Here you can ask questions related to our webpage. </p>

        <nav>
            <NavLink to="faq">View The FAQ</NavLink><br/>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet/>
        </div>
    )
}