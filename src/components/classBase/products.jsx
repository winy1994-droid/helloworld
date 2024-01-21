
import Product from "./product";
import { Component } from "react"; 

class products extends Component {
   state={
    products:[
        {id:1,count:2,productName:"laptop"},
        {id:2,count:3,productName:"ipad"},
        {id:3,count:1,productName:"iphone"}, 
    ]
   } 
   
    render(){
         return(
          
        <>
           <button onClick={this.handleReset} className="m-2 btn btn-primary ">reset</button>

          {this.state.products.map((p,index)=>(
          <Product onDelete={this.handleDelete} id={p.id} key={index} count={p.count} productName={p.productName} />  
            ))}                 
      </>
            )
    }     

    handleDelete=(productId)=>{
       const newProducts=this.state.products.filter((p)=>p.id!==productId);
       this.setState({products:newProducts});
    }
    
    handleReset=()=>{
     const newProducts =this.state.products.map(p=>{
        p.count=0
        return p
      })
      this.setState({newProducts})
    }
}
  
export default products;