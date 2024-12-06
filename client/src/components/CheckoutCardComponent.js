import { dollyColor } from "../helper";

export default function CheckoutCardComponent({furniture}){
    return (
        <div>
        <div style = {{display: 'flex', width: '100%', height: '150px', margin: '10px'}}>
            <div style = {{display: 'flex', margin: '5px'}}>
            <input style = {{width: '20px', backgroundColor: 'red', color: 'green', accentColor: dollyColor}} type ='checkbox'/>
            <img style = {{borderRadius: '5%'}} src= {furniture.image}/>
            </div>
            <div>
                <p>{furniture.name}</p>
                <p>{furniture.price}</p>
                <p>{furniture.productSku}</p>
            </div>
        </div>
        <hr style = {{opacity: '50%'}} />
        </div>
    )
}