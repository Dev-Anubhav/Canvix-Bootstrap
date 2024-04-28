import  alldata from "./alldata";
import { useNavigate } from "react-router-dom";
const projects=()=>{
const nav = useNavigate();
    const handlepro=(i)=>{
        console.log(i);
        nav(`/SinglePro/${i}`)
    }
    return(
        <>
<div className="projects">
    <div className="container-lg">
        <div className="row">
            <div className="showcase mb-5 ">
                <h2 className="text-center">Recent Showcase</h2>
            </div>
        </div>
        <div className="row">
            {
                alldata.map((item,i)=>{
                    return(
                        <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                <div className="pro-content">
                    <div className="pro-img">
                        <img loading="lazy" className="h-100 w-100 " src={item.image} alt={item.name}/>
                        <div className="details">
                        <i onClick={()=>handlepro(item.id)} className="bi bi-arrow-up-right-circle"></i>
                        </div>
                    </div>
                    <h5 className="mt-4 fw-bold mb-4 ">{item.name}</h5>
                </div>
            </div>
                    )
                })
            }
        </div>
    </div>
</div>
        </>
    )
}
export default projects;