import { useNavigate } from "react-router-dom"
import "../stylesheets/signin.css"

export default function SignIn(){
    const navigate = useNavigate();
    return (
        <div className="signin-container">
            
            <form className="form" action= {() => navigate("/find")}>
                <label className="lab-sign">Name</label>
                <input className = "inp-sign" type = "text" required></input>
                <label className="lab-sign">Email</label>
                <input className = "inp-sign" type = "text" required></input>
                <label className="lab-sign">Password</label>
                <input className = "inp-sign" type = "password" required></input>
                <input type= "submit" className="btn-sub btn-sign"/>
            </form>
            
        </div>
    )
}