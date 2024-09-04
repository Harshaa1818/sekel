import { useEffect,useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


const ProductPage = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        }
        )
        .catch(err=>console.log(err))
    },[])
    const nav = useNavigate()

    const handleAddToCart = (id) => {
        localStorage.getItem('cart') ? localStorage.setItem('cart',localStorage.getItem('cart')+','+id) : localStorage.setItem('cart',id)
        nav('/cart')
    }

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
                        
                        <button onClick={()=> handleAddToCart(product.id)}>Add to Cart</button>
                        </div>
                        
                        </div>

                    </div>
    )

}
export default ProductPage