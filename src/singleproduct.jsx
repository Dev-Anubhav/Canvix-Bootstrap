import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "./alldata";

const singlepro=()=>{
    const{id}=useParams();
    // console.log(id)
    const[item,setitem]=useState();


  useEffect(()=>{
const filtered = data.find((item)=>item.id === Number(id));
setitem(filtered);
  },[id]);

    return(
        <>
        {
            item && <div className="singlepro">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        <div className="single-img">
                            <img src={item.image} alt={item.name} />
                            <div className="card-details">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-6">
                                        <div className="blackbox bg-black px-2 py-3 rounded-3">
                                            <h6 className="text-white fs-5 ">Category:</h6>
                                            <span className="text-white">{item.name}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6">
                                        <div className="blackbox bg-black px-2 py-3 rounded-3">
                                            <h6 className="text-white fs-5">Specialties:</h6>
                                            <span className="text-white">{item.specialties[0]}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6">
                                        <div className="blackbox bg-black px-2 py-3 rounded-3">
                                            <h6 className="text-white fs-5">Date:</h6>
                                            <span className="text-white">{item.date}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6">
                                        <div className="blackbox bg-black px-2 py-3 rounded-3">
                                            <h6 className="text-white fs-5">Location:</h6>
                                            <span className="text-white">{item.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="single-about py-4 ">
                                <h3 className="fs-1 fw-bold ">About</h3>
                                <p className="fs-5">{item.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default singlepro;