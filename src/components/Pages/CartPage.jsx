import { useSelector } from "react-redux"

const CartPage = () => {

    const cartItems = useSelector((state) => state.cartItems)

    return(
        <div>
            {cartItems.map((item) => (  
                <div key={item.title}>
                    <div><img src={item.image} alt={item.title} /></div>
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                    <div>{item.description}</div>
                </div>


            ))}
            </div>
    )

}
export default CartPage