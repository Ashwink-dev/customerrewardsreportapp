import React, { useState } from "react";
import APIWrapper from "../core/apiwrapper";

const Login = (props) => {
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Login = (event) => {
        event.preventDefault()
        if (Email === '' || password === '') {
            alert("Please enter all fields !!!!")
            // eslint-disable-next-line
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email) === false) {
            alert('Please enter a valid Email')
            setEmail('')
        } else {
            APIWrapper('GET', `users?email=${Email}&password=${password}`).then((response) => {
                if (response.status === 200) {
                    if (response.data.length) {
                        alert('User Logged In Successfully !!!')
                        localStorage.setItem('isLoggedIn', 'true');
                        localStorage.setItem('userdetails', JSON.stringify(response.data[0]));
                        window.location.href = "/home"
                    } else {
                        alert('Invalid User Credentials !!!')
                    }
                } else {
                    alert(process.env.REACT_APP_MESSAGE)
                }
            })
        }
    }
    return (<section className="mt85">
        <div className="main">
            <div className="login">
                <form>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" value={Email} onChange={(event) => setEmail(event.target.value)} required />
                    <input type="password" name="pswd" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    <button type="submit" onClick={(event) => Login(event)}>Login</button>
                </form>
            </div>
        </div>
    </section>)
}

export default Login