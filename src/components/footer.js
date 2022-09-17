/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React  from "react"; 

const Footer = (props) => {

    return( <footer>
        <div className="internalcontainer">
            <div className="logowrapper">
                <h3>Assignment</h3>
                <address>Kitchener <br /> N2M 5H3</address>
            </div>
            <div className="footerlinks">
                <div className="links">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blockbuster</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
                <div className="links">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                </div>
                <div className="links">
                    <h3>Account</h3>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Watchlist</a></li>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">User Guide</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
            </div>
            <div className="subscribeletter">
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter system now
                    to get latest news from us.</p>
                <form>
                    <input type="text" value="" placeholder="Email.." required readOnly />
                    <input type="submit" value="send" />
                </form>
            </div>
        </div>
    </footer>)
}

export default Footer