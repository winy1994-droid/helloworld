   
 import { useState } from "react"

const Product=({productName,count:propCount,onDelete,id})=>{
        const [count,setCount]=useState(propCount);

        return(
            <div>             
             <span className=" badge m-2 text-info">{productName}</span>
             <span className="m-2 badge bg-primary">{format()}</span>
             <button onClick={increase} className="m-2 btn btn-sm btn-success">+</button>
             <button onClick={decrease} className="m-2 btn btn-sm btn-danger">-</button>
             <button onClick={handleDelete} className="m-2 btn btn-sm btn-warning">delete</button>  
           </div>
        )
        
        function increase(){   
          setCount(count+1) 
        }
        
       function decrease(){     
         setCount(count-1)  
        }
          

      function handleDelete(){
        onDelete(id)
       }



        function format(){
           if ( count===0){
             return "zero"
          }
          else{
            return  count
          }
         }


   
}

export default Product




 
 