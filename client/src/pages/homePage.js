import { useContext } from "react";
import { UserContext } from "../App"

export default function HomePage(){
    const [user,setUser] = useContext(UserContext);

    return (
        <div style = {{textAlign: 'center'}}>
            <h1>Welcome to Rich Furniture{user.firstName ? ',':''}</h1>
            <h2>{user.firstName.toUpperCase()}</h2>
        </div>
    )
}