import { useContext, useEffect, useState } from "react"
import { CartContext } from "../App"
import {getShoppingCart} from "../utils/orderAPICalls"
import CheckoutCardComponent from "../components/CheckoutCardComponent";
import { buttonStyles } from "../styles/commonStyles";
import OverlayComponent from "../components/OverlayComponent";
import CheckoutFormComponent from "../components/CheckoutFormComponent";
import { getEmail } from "../utils/customerAPICalls";

export default function CheckoutPage(){
    const [cart,setCart] = useContext(CartContext);
    const [popup,setPopup] = useState(false);
    const [order,setOrder] = useState({
        customerEmail: getEmail(),
        items: cart,
        pickUp: 'Costco',
        dropOff: {
            state: "",
            city: "",
            zipcode: "",
            address: "",
            time: ""
        }
    })

    useEffect(() => {
        getShoppingCart(cart)
        .then((data) => setCart(data))
    },[])
    
    return (
        <div style = {{justifyItems: 'center'}}>
            <OverlayComponent component = {<CheckoutFormComponent order = {order} setOrder = {setOrder}/>} open={popup} setOpen={setPopup}/>
            <h1>Checkout Cart</h1>
            {cart.length == 0 ? 'Add some items to your cart!' : null}
            <div style = {{height: '500px', width: '100%', overflowY: 'scroll', overflowX: 'hidden'}}>
            {cart.map((item) => <CheckoutCardComponent furniture = {item}/>)}
            </div>
            <button 
            style = {buttonStyles()}
            onClick = {() => {setPopup(true)}}
            >Checkout</button>
        </div>
    )
}