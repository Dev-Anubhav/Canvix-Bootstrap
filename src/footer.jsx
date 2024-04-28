import logo from "./assets/Logo.png"
import { useState } from "react";
const footer=()=>{
    const[input,setInput]=useState("");
    return(
        <>
        <div className="footer py-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 ">
                        <div className="brand-logo">
                            <img src={logo} alt="convex" />
                            <p className="mt-4 text-white">We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex col-sm-6 ">
                        <div className="links d-flex flex-column gap-2">
                            <h6 className="fs-5 text-white fw-bold ">Pages</h6>
                            <a className="text-white text-decoration-none " href="#">Home</a>
                            <a className="text-white text-decoration-none " href="#">Home 2</a>
                            <a className="text-white text-decoration-none " href="#">About</a>
                            <a className="text-white text-decoration-none " href="#">Portfolio</a>
                            <a className="text-white text-decoration-none " href="#">Single</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <h6>Subscribe</h6>
                        <div className="input w-100 p-2 border-1 bg-white d-flex rounded-pill overflow-hidden ">
                            <input  type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter your email here" className="d-inline-block w-75  border-0 p-2" />
                            <button className="d-inline-block rounded-pill px-3 border-0 text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default footer;