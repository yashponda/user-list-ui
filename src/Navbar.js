import React from "react";
import './index.css';
let Navbar = () => {
    return (
        <div className="Navbar">
            <div className="nav1" href="/Name" isActive>Name</div>
            <div className="nav2" href="/Status">Status</div>
            <div className="nav3" href="/Access">Access</div>
        </div>
    )
}
export default Navbar;