import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from 'axios'

const CartPage = () => {

    // const cartItems = useSelector((state) => state.cartItems)
    const [data,setData] = useState([])

    let itemIds = localStorage.getItem('cart')
    itemIds = itemIds.split(',')
    console.log(itemIds)
    const uniqueItems = [...new Set(itemIds)]

    

    useEffect(()=>{
        (async()=>{
            uniqueItems.map((id) => {
                axios.get(`https://fakestoreapi.com/products/${id}`)
                .then((res)=>{
                    console.log(res.data)
                    setData((prev)=>[...prev,res.data])
                }
                )
                .catch(err=>console.log(err))
        })})()
    },[])


    

    return(
        <div>
         {data && data.map((product) => (
             <div className="card" key={product.id}>

             <div className='image'>
             <img src={product.image} alt={product.title} />
             </div>

            

             

             <p >Price : {product.price} $ </p>
           

            
             
            
             
             </div>))}
             </div>

         
            
    )

}
export default CartPage