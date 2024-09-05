import { useEffect,useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import '../../App.css'


const ProductPage = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams()
    const nav = useNavigate()

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        }
        )
        .catch(err=>console.log(err))
    },[])

    const handleAddToCart = (id) => {
        localStorage.getItem('cart') ? localStorage.setItem('cart',localStorage.getItem('cart')+','+id) : localStorage.setItem('cart',id)
        nav('/cart')
    }

    return(
        <div className="card" key={product.id}>
                        
                        <img style={{'height':"500px", "width":"500px"}} src={product.image} alt={product.title} />
                        <h1>{product.title}</h1>
                       
                        <h2 className="price">Price : {product.price} $ </h2>
                        

                        <h3 className="description">{product.description}</h3>
                        
                        <button onClick={()=> handleAddToCart(product.id)}>Add to Cart</button>
                       

                    </div>
    )

}
export default ProductPage