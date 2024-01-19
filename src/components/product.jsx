 import { Component } from "react";

class Product extends Component{

  state={
    count:this.props.count,
    
  }
     
    render(){
        const {productName}=this.props
        const {price}=this.props
        return(
   
              <div>         
              <span className=" badge m-2 text-info">{productName}</span>
              <span className="badge m-2 text-info">{price}</span>
              <span className="m-2 badge bg-primary">{this.format()}</span>
              <button onClick={this.increase} className="m-2 btn btn-lg btn-success">+</button>
              <button onClick={this.decrease} className="m-2 btn btn-lg btn-danger">-</button>
              <button className="m-2 btn btn-lg btn-warning">X</button> 
           </div>
          
          
    
           
        )
    } 
 

  increase=()=>{
     const {count}=this.state
     this.setState({count:count + 1})
  }

  decrease=()=>{
      const {count}=this.state
      this.setState({count:count - 1})
  }

 

  format(){
    if (this.state.count===0){
      return "zero"
   }
   else{
     return this.state.count
   }
  }
   
}
 
export default Product



