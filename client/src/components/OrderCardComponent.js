import { useState } from "react"
import { fetchSpecifiedFurniture } from "../utils/furnitureAPICalls";

export default function OrderCardComponent({order}) {
    const [images,setImages] = useState([]);

    return (
        <div style = {{width: '100%'}}>
        <details onClick = {() => {
            if (images.length == 0) {
                const updatedImages = images
                order.items.map((item) => {
                fetchSpecifiedFurniture(item).then((res) => {updatedImages.push(res.image)})
                .then(setImages(updatedImages))
            })}
            }}>
            <summary>{order.orderID}</summary>
            <p>Pick Up: {order.pickUp}</p>
            <p>Drop Off: {order.dropOff.address}, {order.dropOff.state}, {order.dropOff.city}, {order.dropOff.zipcode}</p>
            <div style = {{display: 'flex', overflow: 'scroll', width: '100%'}}>
                {images.map((image) => <img style = {{margin: '5px'}} src = {image}/>)}
            </div>
        </details>
        </div>
    )
}