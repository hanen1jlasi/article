import React from 'react'
import axios from 'axios'
import { useState ,useEffect   } from 'react'
import Prod from './prod'
import { useNavigate } from 'react-router-dom'
const Products = (props) => {
     const [produit , setproduit]=useState([])
     const [image , setimage]=useState("")
     const [title , settitle]=useState("")
     const [price , setprice]=useState("")
    let navigate = useNavigate()
     const  ajout=() =>{
            
                  
      axios.post(`http://localhost:8000/produit`, 
      {
          "title": title ,
          "price": price ,
          "image": image 
        
      })
      .then((res) => {navigate("/prod1")});
      
  }
  
     useEffect (
       () =>{

   axios.get("http://localhost:8000/produit")
   .then((res)=>setproduit(res.data))
   

     },[]
     )
  return (

    <div className='pro'>
      <div>
      
        <input type="text" onChange={(e)=> settitle(e.target.value)}/>
                      <input type="text" onChange={(e)=> setprice(e.target.value)}/>
                      <input type="text" onChange={(e)=> setimage(e.target.value)}/>
                      <button onClick={()=>ajout()}>ajouter </button>
     
      </div>
     
         {
         produit.map(
            
            (el,index)=>(
   <Prod image={el.image}  title={el.title}  price={el.price}  key={index}  id={el.id}/>
         )
         )
         }
       
  
    </div>
  )
}

export default Products