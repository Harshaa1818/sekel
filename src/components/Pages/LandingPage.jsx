import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import "../../App.css"
import { addTocart } from '../Redux/slices'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [products, setProducts] = useState([])
    useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        setProducts(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
},[])

    const handleProductDetail = (e) => {
      
        console.log(e);
        navigate(`/product/${e}`);
    }

   

        
        
    

    return(
        <div className='bodyy'>
        <div className='cart-btn'>
            <button onClick={()=>navigate('/cart')}>See cart</button>
            </div>
        <div className="container" >
            
            {products.map((product) => {
                return(
                    <div className="card" key={product.id}>
                        <div className='image'>
                        <img src={product.image} alt={product.title} />
                        </div>

                        <div className='content'>
                        <div className='price'>

                        <p >Price : {product.price} $ </p>
                        </div>

                        <div className='btn'>
                        
                        <button onClick={()=> handleProductDetail(product.id)}>see details</button>
                        </div>
                        
                        </div>

                    </div>
                )
            })} 
        </div>
            </div>
    )
}


export default LandingPage