import {React,} from 'react'

import './Header.css'



const Header = (props) => {


  

   return(
    <nav className="navbar navbar-expand-lg bg-dark  main-box fixed-top">
  <div className="container-fluid ">
    <div className='mobilemain'>
    <a to="#" className="navbar-brand text-light container" >NewsSphere <i className="fa-solid fa-globe"></i></a>
    <p id="inputcato" >Categories </p>
    <input className="smallinp" value={props.input} onChange={(e) => props.setInput(e.target.value)}></input>
    <div className='searchsmall' onClick={props.handleApi}><i id="search-icon" className="fa-solid fa-magnifying-glass"></i></div>

    </div>
    </div>
   
    
    <div className=" navbar-collapse" id="navbarNavAltMarkup">
     
   
      <div className="navbar-nav">
        <p id="inputcat" >Categories : </p>
        <input value={props.input} onChange={(e) => props.setInput(e.target.value)
        } placeholder='Search for the category'></input><div className='search' onClick={props.handleApi}><i id="search-icon" className="fa-solid fa-magnifying-glass"></i></div>
   
    
      {/* <div onClick={() => {props.setCategory("entertainment")}} ><li  className="lists" >Entertainment</li></div>
        <div onClick={() => {props.setCategory("sports")}} ><li className="lists" >Sports</li></div>
        <div onClick={() => {props.setCategory("business")}}><li  className="lists" >Business</li></div>
        <div onClick={() => {props.setCategory("science")}}><li className="lists" >Science</li></div>
        <div onClick={() => {props.setCategory("technology")}}><li  className="lists" >Technology</li></div></div> */}
       
      </div>
    
    </div>
     </nav>
    )}

export default Header
