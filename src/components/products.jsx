
import Product from "./product";
import { Component } from "react"; 

class products extends Component {
   state={
    products:[
        {id:1,count:2,productName:"laptop",price:"100$"},
        {id:2,count:3,productName:"ipad",price:"1200$"},
        {id:3,count:1,productName:"iphone",price:"300$"},
        
    ]
    
   }
   
    render(){
         return(
            <>
               {this.state.products.map((p,index)=>(
                 <Product key={index} count={p.count} productName={p.productName}   price={p.price}><p>Lorem ipsum dolor sit </p></Product>
                ))}
                      
            </>
         )
    }     
}
 
export default products;