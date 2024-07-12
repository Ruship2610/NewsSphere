import {React,useState,useMemo,useEffect, useCallback} from 'react'
import axios from 'axios'

import './Home.css';



const Home = (props) => {

  const [products,setProducts] = useState([]);
  
 
  const handleApi = ( async() => {
    try{
        axios.get(`https://inshortsapi.vercel.app/news?category=${props.category}`)
        .then((response) => {
          setProducts(response["data"]["data"]);
        })
    }catch(error){
     console.log(`Something is wrong try again ${error}`)
    }
  });
  
  useEffect(() => {
    handleApi();
  },[props.category]);

 
  return (
    <>

  
  <div className="content">

 
   {
      products.map((news) => {
        return(
          <>
          <div className="container card">
            <div className="mainbox">
              <div className="img-box" >
             <img src={news.imageUrl} className="card-img-top" ></img>
             </div>
             <div className="card-body">
             <h5 className="card-title">{news.title}</h5>
             <p className="card-text">{news.content}</p>
             <p className='author'>Author : {news.author}</p>    
             <p id='read'><a href={news.readMoreUrl}>Read More</a></p> 
           </div>
  </div>
  </div>
          </>
        )
      })
    }
   
  </div>
  
    </>
  )
}


export default Home
