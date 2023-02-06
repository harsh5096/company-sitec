import React,{useRef}  from 'react'
import "../component/css/navbar.css"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Navbar = (props) => {

const navRef = useRef();
const showNavbar = () =>{
  navRef.current.classList.toggle("responsive_nav")
}
  return (
    <>
   
    <div className="upper-navbar">
      <div className="icon">
    <i class=" fa fa-brands fa-linkedin"></i>
    <i class=" fa fa-brands fa-facebook"></i>
    <i class=" fa fa-brands fa-twitter"></i>
    <i class=" fa fa-solid fa-phone"></i>
    <i class=" fa fa-duotone fa-envelope"></i>
    </div>
    </div>
    
    <div className='navbar'>

    <div className= "logo-active">
   <img src="./images/logo.png" alt="" />
    </div>

      <nav ref={navRef} className='Nav-item'>
        <ul> 
        <li className='Nav-link-1'>
           {/* <a href="">Home</a> */}
           <Link onClick={showNavbar}  to='/home'>Home </Link>
        </li>
        <li className='Nav-link-2'>
           {/* <a href="">Home</a> */}
           <Link onClick={showNavbar}  to='/about'>About </Link>
        </li>
        <li className='Nav-link-3'>
          {/* <a href="">Service</a>  */}
            <Link onClick={showNavbar}  to='/services'>Services </Link>
        </li>

        <li className='Nav-link-5'>
          {/* <a href="">contact</a> */}
            <Link onClick={showNavbar} to='/Contact'>Contact </Link>
        </li>
        </ul>
      </nav>
      <div className="mobile-navbar-btn2">
        <div className="mbile-nav-icon1o" >
            <i  onClick={showNavbar} className="fa fa-bars"></i>
            </div>
      </div>
      
    </div>

    </>

  
  )
}

export default Navbar

Navbar.propTypes={
  title:PropTypes.string
}
Navbar.defaultProps={
  title:"set the title here "
}