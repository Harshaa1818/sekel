import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "../../App.css"
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { responseData } from '../Redux/slices'

const LandingPage = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [products, setProducts] = useState([])

    useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        setProducts(response.data);

        
    
    })
    .catch((error) => {
        console.log(error)
    })},[])

   

    const handleProduct = (id) =>{
        navigate(`/product/${id}`)


    }

    return(
        <div className="container" >

            <div className='navbar'>
            <h1>Shop Kart</h1>
            <button onClick={()=>navigate('/cart')}>See cart</button>

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
                        
                        
                            <button className='Submitbutton' onClick={ ()=>handleProduct(product.id)}>see details</button>
                        
                        </div>

                    </div>
                )
            })} 
            </div>
        </div>
    )

}
export default LandingPage