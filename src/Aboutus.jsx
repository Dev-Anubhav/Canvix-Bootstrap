import about from "./assets/Aboutus.webp"
const aboutus=()=>{
    return(
        <>
        <div className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="about-img">
                            <img src={about} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="about-content w-100">
                            <h4 className="fs-4 mb-4">About us</h4>
                            <h2 className="mb-4">The core mission behind all our work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
                            <div className="reviews d-flex ">
                                <span className="review d-flex  justify-content-center flex-column ">
                                    <span className="counts fs-3">300 +</span>
                                    <span className="txt">Companies Helped</span>
                                </span>
                                <span className="review d-flex justify-content-center flex-column mx-5">
                                    <span className="counts fs-3">230 +</span>
                                    <span className="txt">Revenue Generated</span>
                                </span>
                            </div>
                            <button className="mt-5"><i className="bi bi-arrow-right-circle-fill"></i> Start your Free Trial</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default aboutus;