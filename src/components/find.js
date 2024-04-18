import "../stylesheets/find.css";
import { downloadData } from "../backend/firebase";
import { useEffect, useState } from "react";

export default function Find(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        downloadData().then((res) => {
            res.map((curr) => curr.request = false)
            setData(res);
        })
    }, [])
    return(
        <div className="find-container">
            <div className="find-head">
                Services near you
            </div>
            <div className="listings">
                {data.map((curr) => (
                    <div className="card">
                        <div>
                            <img className = "img-list" src = {curr.imageUrl} alt = "dfsd"></img>
                        </div>
                        <div className="rightside">
                            <div className="card-info">
                                <div className="sub">Posted by</div>
                                <div className="main">{curr.name}</div>
                            </div>
                            <div className="card-info">
                                <div className="sub">Service type</div>
                                <div className="main">{curr.type}</div>
                            </div>
                            <div className="card-info">
                                <div className="sub">Location</div>
                                <div className="main">{curr.city}</div>
                            </div>
                            <div className="card-info">
                                <div className="sub">Cost</div>
                                <div className="main">₹{curr.cost}</div>
                            </div>
                            <div className="contact" onClick={() => {
                                window.alert("Your request has been sent")
                            }}>
                                Request Service
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}