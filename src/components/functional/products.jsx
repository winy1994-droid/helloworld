 import Product from "./product"
 import { useState } from "react"



 const Products=()=>{
   const [products,setProducts]= useState( [
        {id:1,count:2,productName:"airpad"},
        {id:2,count:3,productName:"ps5"},
        {id:3,count:1,productName:"apple"},        
    ])

    return(
        <>
               { products.map((p,index)=>(
                 <Product key={index} count={p.count} productName={p.productName}   price={p.price}/> 
                ))}
                      
        </>
    )
 }

 export default Products 