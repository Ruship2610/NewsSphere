import {React,} from 'react'

import './Header.css'



const Header = (props) => {


  

   return(
    <nav className="navbar navbar-expand-lg bg-dark  main-box fixed-top">
  <div className="container-fluid ">
    <div className='mobilemain'>
    <a to="#" className="navbar-brand text-light container" >NewsSphere <i className="fa-solid fa-globe"></i></a>
    <div className="left-side" >
      <p className='text-light categ '>Category</p>

      <select className="left-drop bg-dark text-light" value={props.category} onChange={e => props.setCategory(e.target.value)}>
      <option>all</option>
      <option >Sports</option>
        <option >Business</option>
        <option >Politics</option>
        <option >Technology</option>
        <option>Travel</option>
        <option>Entertainment</option>
        <option>Automobile</option>
        <option>National</option>
        <option>Hatke</option>
        <option >Science</option>
        <option>Fashion</option>
      </select>
      </div>

   

    </div>
    </div>
   
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="right-side" >
      <p className='text-light categ '>Category</p>

      <select className="bg-dark text-light" value={props.category} onChange={e => props.setCategory(e.target.value)}>
      <option>all</option>
      <option >Sports</option>
        <option >Business</option>
        <option >Politics</option>
        <option >Technology</option>
        <option>Travel</option>
        <option>Entertainment</option>
        <option>Automobile</option>
        <option>National</option>
        <option>Hatke</option>
        <option >Science</option>
        <option>Fashion</option>
      </select>
      </div>
     
   
      
       
      </div>
    
    
     </nav>
    )}

export default Header
