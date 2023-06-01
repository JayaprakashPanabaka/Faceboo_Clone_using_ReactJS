import "./HeaderArea.css";
import { AiOutlineSearch, AiFillHome, AiOutlineWallet } from 'react-icons/ai';
import {MdOndemandVideo} from 'react-icons/md';
import {FaRegFlag, FaUsers, FaPlusCircle, FaFacebookMessenger, FaBell} from 'react-icons/fa';
import MainArea from "../MainArea/MainArea";


function HeaderArea() {
    return (
        <div className="HomePage">
            <div className="header">

                <div className="first-header">
                    <div className="logo">
                        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="logo" style ={{height:"50px", padding:".5 rem"}}/>
                    </div>
                    <div className="Search">
                        <AiOutlineSearch style = {{height:"2rem"}}/>
                        <input placeholder="Search Facebook" type="Search" />
                    </div>
                </div>
                <div className="middle-header">
                    <div className="icon">
                        <AiFillHome font-size= "2rem" color="#1877f2" /> 
                    </div>
                    <div className="icon">
                        <FaRegFlag font-size= "2rem" /> 
                    </div>
                    <div className="icon">
                        <MdOndemandVideo font-size= "2rem" /> 
                    </div>
                    <div className="icon">
                        <FaUsers font-size= "2rem" /> 
                    </div>
                    <div className="icon">
                        <AiOutlineWallet font-size= "2rem" /> 
                    </div>
                </div>
                <div className="third-header">
                    <div className="plus">
                        <FaPlusCircle fontSize = "2rem" />
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger fontSize = "2rem" />
                    </div>
                    <div className="plus">
                        <FaBell fontSize = "2rem" />
                    </div>
                    <div className="Pluss">
                        <img src="https://images7.alphacoders.com/122/1228014.png" alt="dp" style={{height:"40px"}} />
                    </div>
                </div>
            </div>
            <MainArea />
        </div>
    )
}

export default HeaderArea;