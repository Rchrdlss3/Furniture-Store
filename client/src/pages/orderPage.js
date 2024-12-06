import { useEffect, useState } from "react"
import { getOrders } from "../utils/orderAPICalls";
import { getEmail } from "../utils/customerAPICalls";
import OrderCardComponent from "../components/OrderCardComponent";

export default function OrderPage() {
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        getOrders().then(data => setOrders(data))
    },[])

    return (
        <div>
            <h1>Orders for {getEmail()}</h1>
            <div style = {{height: '500px', overflow: 'scroll', border: '1px solid', borderRadius: '10px', padding: '10px'}}>
            {orders.map(order => <OrderCardComponent order = {order} key = {order.orderID}/>)}
            </div>
        </div>
    )
}