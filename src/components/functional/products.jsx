 import Product from "./product"
 import { useState } from "react"



 const Products=()=>{
   const [products,setProducts]= useState([
        {id:1,count:2,productName:"airpad"},
        {id:2,count:3,productName:"ps5"},
        {id:3,count:1,productName:"apple"},        
    ])

    return(
        <>
               { products.map((p,index)=>(
                 <Product onDelete={handleDelete} id={p.id} key={index} count={p.count} productName={p.productName} /> 
                ))}         
        </>
    );

         function handleDelete(productId){
           const newProducts= products.filter(p => p.id !==productId)
           setProducts({newProducts})
         }

 }

 export default Products 