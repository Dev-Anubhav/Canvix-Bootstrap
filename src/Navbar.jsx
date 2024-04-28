import Logo from "./assets/Logo.png"
import { Link } from "react-router-dom";
const navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-sm position-fixed start-0 end-0 z-3 bg-black">
  <div className="container-lg"> 
    <Link to="/" className="navbar-brand text-white">
      <img src={Logo} alt="Color" />
    </Link>
    <button
      className="navbar-toggler bg-white"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link text-white ">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Projects" className="nav-link text-white ">
            Projects
          </Link>
        </li>
      </ul>
        <button className="btn bg-white ms-auto">
          Get in touch
        </button>
      
    </div>
  </div>
</nav>

        </>
    )
}
export default navbar;