import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import '../../App.css'

const CartPage = () => {
  // const cartItems = useSelector((state) => state.cartItems)
  const [data, setData] = useState([]);

  let itemIds = localStorage.getItem("cart");
  itemIds = itemIds.split(",");
  console.log(itemIds);
  const uniqueItems = [...new Set(itemIds)];
  let items = [];

  useEffect(() => {
    uniqueItems.map((id) => {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          setData((prev) => [...prev, res.data]);
        })
        .catch((err) => console.log(err));
    });
      
  }, []);
  

let hs = new Set()
let products = []

for(let i=0;i<data.length;i++){
    hs.add(data[i].id)
}
for(let i=0;i<data.length;i++){
    if(hs.has(data[i].id)){
        products.push(data[i])
        hs.delete(data[i].id)
    }
}
   
const handleRemove = (id) => {
    const itemIds = localStorage.getItem("cart");
     items = itemIds.split(",").filter((item) => item !== id.toString());
    console.log(items);
    localStorage.setItem("cart", itemIds);


}
  
  return(
    <div className="container" >

        <div className='navbar'>
        <h1>Cart Items</h1>
        

        </div>

        <div className='cards'>

        {products.map((product) => {
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
