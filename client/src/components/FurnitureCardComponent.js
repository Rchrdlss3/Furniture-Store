import { useContext } from "react";
import { buttonStyles } from "../styles/commonStyles";
import { fetchSpecifiedFurniture } from "../utils/furnitureAPICalls";
import { CartContext } from "../App";

export default function FurnitureCard({furniture}){
    const [cart,setCart] = useContext(CartContext);

    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            margin: 10,
            flexShrink: 0,
            width: '350px',
            height: '500px',
            borderRadius: '5%',
            boxShadow: '1px 8px 10px 4px'
        }}>
            <div>
            <img style= {{maxWidth: '100%', top: 0, borderRadius: '5% 5% 0% 0%'}} src = {furniture.image}/>
            </div>
            <div style = {{fontSize: '1vh', textAlign: 'center', width: '100%', height: '100px'}}>
            <p style = {{ fontSize: '1.5vh', fontWeight: 'bold'}}>{furniture.name}</p>
            <p>Price: {furniture.price}</p>
            <div style = {{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
            <p> Product: {furniture.productSku} </p> <p>Item: {furniture.itemID}</p>
            </div>
            </div>
            <div style = {{display: 'flex'}}>
            {/* <button style = {buttonStyles()}
            onClick = {() => {fetchSpecifiedFurniture(furniture.itemID)}}
            >Dolly</button> */}
            <button style = {buttonStyles()}
            onClick = {() => {setCart([...cart,furniture.itemID])}}
            >Add to Cart</button>
            </div>
        </div>
    )
}