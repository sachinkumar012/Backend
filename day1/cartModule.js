/* For one module, you can use the following code snippet.
   For multiple modules, you can create a separate file for each module and export them accordingly.
   Here, we are using a simple function to simulate adding items to a cart.
*/


// const addToCart=()=>{
//     return "Add to Cart";
// }

// module.exports=addToCart;




/* For the cartModule.js file, you can use the following code snippet.
   This module exports a function that simulates adding items to a cart and logs the items in the cart.
*/

const addToCart=()=>{
    return "Add to Cart";
}

const cartItems={
    "clothes":5,
    "shoes":10,
    "electronics":90};

module.exports={addToCart,cartItems};  // it show error if i use addToCart in {} then in index.js it will not work, so for this 
// we need to use const {addToCart,cartItems}=require('./cartModule'); here addToCart should be in { } 
// const {addToCart,cartItems}=require('./cartModule'); this is used to run this file in index.js
