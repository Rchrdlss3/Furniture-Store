import { useState } from "react";
import { buttonStyles, formStyle, formWrapperStyle, inputStyle } from "../styles/commonStyles";
import { createDollyOrder } from "../utils/orderAPICalls";
import OverlayComponent from "./OverlayComponent";
import OrderConfirmationComponent from "./OrderConfirmationComponent";

export default function CheckoutFormComponent({order,setOrder}){
    const [popup,setPopup] = useState(false)
    const [orderID,setOrderID] = useState('')
    return(
        <div style = {formWrapperStyle()}>
            <OverlayComponent open = {popup} setOpen={setPopup} component = {<OrderConfirmationComponent orderID= {orderID}/>}/>
            <div style = {formStyle()}>
            <h2>Picking Up From</h2>
            <select value = {'Costco'}>
                <option>Costco</option>
            </select>
            <h2>Where are we delivering to ?</h2>
            <input style = {inputStyle()} type = 'text' value = {order.dropOff.state} placeholder= "State" onChange = {(e) => {setOrder(prev => ({...prev,dropOff:{...prev.dropOff,state: e.target.value}}))}}/>
            <input style = {inputStyle()}  type = 'text' value = {order.dropOff.city} placeholder= "City" onChange = {(e) => {setOrder(prev => ({...prev,dropOff: {...prev.dropOff,city: e.target.value}}))}}/>
            <input style = {inputStyle()}  type = 'number' value = {order.dropOff.zipcode} placeholder= "Zipcode" onChange = {(e) => setOrder(prev => ({...prev,dropOff:{...prev.dropOff, zipcode: e.target.value}}))}/>
            <input style = {inputStyle()}  type = 'text' value = {order.dropOff.address} placeholder= "Address" onChange = {(e) => {setOrder(prev => ({...prev,dropOff:{...prev.dropOff,address: e.target.value}}))}}/>
            <input style = {inputStyle()}  type = 'datetime-local' value = {order.dropOff.time} onChange = {(e) => {setOrder(prev => ({...prev,dropOff:{...prev.dropOff,time: e.target.value}}))}}/>
            <button 
            style = {buttonStyles()}
            onClick = {() => {
                createDollyOrder(order).then((res) => {if(res.status == 201) {
                    res.json().then((data) => setOrderID(data.orderID))
                    console.log()
                    setPopup(true)
                }})
            }}
            >Confirm</button>
            </div>
        </div>
    )
}