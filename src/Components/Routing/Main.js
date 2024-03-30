import React from "react";
import { Link } from "react-router-dom";


const Main = ({navItems}) => {
    return(
        <div>
            <nav style={{display: 'flex', justifyContent: 'center'}}>
                <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
                    {navItems.map((item, index) => (
                        <li key={index} style={{ marginRight: "10px" }}>
                            <Link to = {item.path} style={{ textDecoration: "none", color: "black" }}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Main;