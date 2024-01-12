import { Component } from "react";

class Product extends Component{
    render(){
        return(
            <>
              <span>product name</span>
              <span>2</span>
              <button>+</button>
              <button>-</button>
              <button>Delete</button>
            </>
        )
    }
}

export default Product