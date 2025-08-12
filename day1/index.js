console.log("Hello World!");
let l=[1,2,3,4,5,6,89];
l.forEach((index, value)=>{
    console.log(value,index);
})


const {addToCart,cartItems}=require('./cartModule');
console.log(addToCart());
console.log("Cart Items: ",cartItems);