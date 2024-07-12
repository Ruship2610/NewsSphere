import {React,} from 'react'

import './Header.css'


const Header = (props) => {


  

   return(
    <nav className="navbar navbar-expand-lg bg-dark  main-box fixed-top">
  <div className="container-fluid ">
    <a to="#" className="navbar-brand text-light container"  >NewSpher <i className="fa-solid fa-globe"></i></a>
   
    <div className=" navbar-collapse" id="navbarNavAltMarkup">
     
      <div className="navbar-nav ">
   

      <div onClick={() => {props.setCategory("entertainment")}} ><li  className="lists" >Entertainment</li></div>
        <div onClick={() => {props.setCategory("sports")}} ><li className="lists" >Sports</li></div>
        <div onClick={() => {props.setCategory("business")}}><li  className="lists" >Business</li></div>
        <div onClick={() => {props.setCategory("science")}}><li className="lists" >Science</li></div>
        <div onClick={() => {props.setCategory("technology")}}><li  className="lists" >Technology</li></div></div>
       </div>
      </div>
    
    
    </nav>
   )}

export default Header
