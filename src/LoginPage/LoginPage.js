import "./LoginPage.css";
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <div className="Login">
            <div className="facebook">
                <div className="facebooktext">
                    facebook
                </div>
                <div className="title">
                    Facebook helps you connect and share <br/>
                    with the people in your life.
                </div>
            </div>
            <div className="LoginContainer">
                <div className="LoginDetails">
                    <input type="email" placeholder="Email address or phone number"/> <br/>
                    <input type="password" placeholder="Password"/> <br/>
                    <button className="btn">
                        <Link to="/HeaderArea">LogIn</Link>
                    </button>
                </div>
                <div className="forget">
                    <a href="forget">Forgotten Password</a> <br/>
                    <button className="createbtn">Create New Account</button>
                </div>
                <p></p>
                <div className="page">
                    <a href="createpage"><b>Create a page</b></a> for a celebrity, brand or business.
                </div>
            </div>
        </div>
    )
}

export default LoginPage;