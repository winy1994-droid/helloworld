   
 import { useState } from "react"

const Product=({productName,count:propCount})=>{
        const [count,setCount]=useState(propCount);
        return(

            <div>         
              <span className=" badge m-2 text-info">{productName}</span>
              <span className="m-2 badge bg-primary">{format()}</span>
              <button onClick={increase} className="m-2 btn btn-sm btn-success">+</button>
              <button onClick={decrease} className="m-2 btn btn-sm btn-danger">-</button>
              <button className="m-2 btn btn-sm btn-warning">X</button>   
           </div>
        )
        
        function increase(){
             
          setCount(count+1) 
        }
        
       function decrease(){     
         setCount(count-1)  
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









// import { useState } from "react";


// const App2 = () => {

//   const[load,setLoad]=useState(0)

//   return ( <>
      
//       <span className="badge m-2 bg-success">my app</span>
//       <span className="badge m-2 bg-success">{Show()}</span>
//       <button className="badge bg-black  m-2" onClick={Apply}>Add</button>
//       <button className="badge bg-info  m-2" onClick={reSet}>reset</button>
//   </> );

//   function Apply() {
//     setLoad(load+1)
//   }

//   function Show(){
//     if (load===0) {
//       return " waitting to load"
//     }
//     else{
//       return load
//     }
//   } 

//   function reSet(){
//        return setLoad(0)
//   }

// }
 
// export default App2
 