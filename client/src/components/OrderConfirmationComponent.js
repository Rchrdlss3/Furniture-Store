import { formStyle, formWrapperStyle } from "../styles/commonStyles";

export default function OrderConfirmationComponent({orderID}){
    return (
        <div style = {formWrapperStyle()}>
            <div style = {formStyle()}>
            <h1>Just Received Your Order!</h1>
            <p>Order Number:</p>
            {orderID}
            </div>
        </div>
    )
}