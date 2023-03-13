
import { useState } from 'react'
import axios from 'axios'
const Prod = (props) => {
    const [produit , setproduit]=useState([])
    const [image , setimage]=useState(props.image)
    const [title , settitle]=useState(props.title)
    const [price , setprice]=useState(props.price)
const [show , setshow] =useState(false)
    const deletprod =(id)=>{
    
      axios.delete(`http://localhost:8000/produit/${id}`)
      .then((res)=>{window.location.reload()})

      

    }


    const  update=(id) =>{
            
                  
      axios.put(`http://localhost:8000/produit/${id}`, 
      {
          "title": title ,
          "price": price ,
          "image": image 
        
      })
      .then((res) => console.log(res.data));
      window.location.reload()
  }




  return (
    <div className='prod'>

        <div >
     <img src={props.image} />
     <h1>{props.title}</h1>
     <p>{props.price}</p>
     <button onClick={()=>deletprod(props.id)} >delete</button>
     <button onClick={()=>setshow(true)}>updat</button>





 <div className={`showform ${show ? "open":""}`}>                    
       <form onSubmit={()=>update(props.id)}>
       <span id='x' onClick={()=>setshow(false)} >X</span>
       <input type="text"  defaultValue={props.title} onChange={(e)=> settitle(e.target.value)}/>
       <input type="text" defaultValue={props.price} onChange={(e)=> setprice(e.target.value)}/>
       <input type="text"  defaultValue={props.image} onChange={(e)=> setimage(e.target.value)}/>
       <button type="submit">save</button>
       </form>  
       </div>              
     </div>


    </div>
  )
}

export default Prod