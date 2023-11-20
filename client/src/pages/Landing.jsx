import styled from "styled-components"
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg'
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return  ( 
  <Wrapper>
       <nav>
       <Logo/>
       </nav>
       <div className="container page">
        <div className="info">
          <h1>job <span>traking</span> app</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, minus doloribus! Praesentium, corrupti nulla. Quae autem perferendis dolore molestiae. Deleniti non odit sunt hic sint explicabo at, tempora aperiam omnis.
          </p>
          <Link to='register' className="btn register-link">Register</Link>
          <Link to='login' className="btn ">Login / Demo user</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
       </div>
  </Wrapper>
)
}
export default Landing