/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";

const Header = (props) => {
    const [isloggedIn, updateisloggedIn] = useState(localStorage.getItem('isLoggedIn') ? true : false)


    return (<header>
        <nav>
            <a class="logo" href="/">
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
                    <button type="button" class="loginbtn">Login</button>
                </li>
            </ul>
        </nav>
    </header>)
}

export default Header