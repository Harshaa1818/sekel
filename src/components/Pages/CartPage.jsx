import { useEffect, useState } from "react";

import axios from "axios";
import '../../App.css'


const CartPage = () => {
 
    const [products, setProducts] = useState([])
   const cartItemIds =  localStorage.getItem('cart')?.split(',') 
    // console.log(cartItemIds);

// let hs = new Set()

let uniqueIds = [...new Set(cartItemIds)]
// console.log(uniqueIds)

// for(let i=0;i<cartItemIds.length;i++){
//     hs.add(cartItemIds[i].id)
// }
// for(let i=0;i<cartItemIds.length;i++){
//     if(hs.has(cartItemIds[i].id)){
//         uniqueIds.push(cartItemIds[i])
//         hs.delete(cartItemIds[i].id)
//     }
// }

useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        setProducts(response.data);
    })
    .catch((error) => {
        console.log(error)
    })
},[])
let cartProducts = []
let hs = new Set(uniqueIds)
// console.log(hs)

for(let i = 0 ; i < products.length ; i++ ){
   if(hs.has(JSON.stringify(products[i].id))){
    cartProducts.push(products[i])
   }
}

// console.log(cartProducts)
let nw;
   
const handleRemove = (id) => {
    id = Number(id)
    nw = localStorage.getItem('cart')?.split(',')
   console.log(nw)
   nw = nw.filter((item) => Number(item) !== id)

    localStorage.setItem('cart',nw)



}
  
  return(
    <div className="container" >

        <div className='navbar'>
        <h1>Cart Items</h1>
        

        </div>

        <div className='cards'>

        {cartProducts && cartProducts.map((product) => {
            return(
                <div className="card" key={product.id}>
                    <div className='image'>
                    <img src={product.image} alt={product.title} />
                    </div>

                    <div className='content'>

                   
                      <div className='title'>  <h1>{product.title.slice(0,15)}...</h1></div>
                        
                    
                   
                        <h2 className='price'>Price : {product.price} $ </h2>

                        <button onClick={()=>handleRemove(product.id)}>Remove from cart</button>
                    
                    
                        
                    
                    </div>

                </div>
            )
        })} 
        </div>
    </div>
)

};
export default CartPage;
