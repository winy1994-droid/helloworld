 import { Component } from "react";

class Product extends Component{

 
     
    render(){
       
        return(
              <div>         
              <span className=" badge m-2 text-info">{this.props.productName}</span>
              <span className="m-2 badge bg-primary">{this.format()}</span>
              <button onClick={this.increase} className="m-2 btn btn-lg btn-success">+</button>
              <button onClick={this.decrease} className="m-2 btn btn-lg btn-danger">-</button>
              <button onClick={this.handleDelete} className="m-2 btn btn-lg btn-warning">Delete</button> 
           </div>     
        )
    } 
 

  increase=()=>{
    this.props.count(this.props.count+1)
  }

  decrease=()=>{
    
      this.props.count(this.props.count-1)
  }


 handleDelete=()=>{
       this.props.onDelete(this.props.id);
 }

  format(){
    if (this.props.count===0){
      return "zero"
   }
   else{
     return this.props.count
   }
  }
   
}
 
export default Product



