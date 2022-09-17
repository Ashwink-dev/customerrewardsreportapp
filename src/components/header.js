
import React from "react";

const Header = (props) => {


    return (<header>
        <nav>
            <a className="logo" href="/">
                <h3>Assignment</h3>
            </a>
            <ul>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/careers">Careers</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <button type="button" className="loginbtn">Login</button>
                </li>
            </ul>
        </nav>
    </header>)
}

export default Header