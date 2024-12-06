import { useEffect, useState } from "react";
import { fetchAllFurniture } from "../utils/furnitureAPICalls";
import FurnitureCard from "../components/FurnitureCardComponent";

export default function ShopPage() {
    const [furniture,setFurniture] = useState([]);

    useEffect(() => {
        fetchAllFurniture().then(data => setFurniture(data))
      },[]);

    return (
        <div>
            <div style = {{display: 'flex', flexDirection: 'row', overflowX: 'scroll'}}>
                {furniture.map((item) => {return  <FurnitureCard furniture = {item} key={item.itemID}/>})}
            </div>
        </div>
    )
}