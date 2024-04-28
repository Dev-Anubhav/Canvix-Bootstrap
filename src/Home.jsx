import ornament from "./assets/ornament.png";
import heroimg from "./assets/hero-img.webp";
import About from "./Aboutus";
import Ourservices from "./ourservices";
import Projects from "./Projects";
import Footer from "./footer";

const Home=()=>{
    return(
        <>
        <div className="hero">
<div className="container-lg">
<div className="row">
    <div className="col-lg-5 col-md-5 col-sm-12 order-lg-0 order-md-1 order-last">
       <img className="orna" width="110" height="130" src={ornament} alt="ornament" />
       <div className="hero-content">
        <h2>Ready to take your<span className="hero-blue"> Business Growth </span>
to the next level?</h2>
<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
<button><i className="bi bi-arrow-right-circle-fill"></i> Start your Free Trial</button>
       </div>
    </div>
    <div className="col-lg-7 col-md-7 col-sm-12">
        <div className="hero-img">
            <img  loading="lazy" src={heroimg} alt="" />
        </div>
    </div>
</div>
</div>
        </div>
        <About />
        <Ourservices />
        <Projects />
        <Footer />
        </>
    )
}

export default Home;