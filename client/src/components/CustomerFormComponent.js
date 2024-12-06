import { useContext } from "react"
import { UserContext } from "../App"
import { buttonStyles, formStyle, formWrapperStyle, inputStyle } from "../styles/commonStyles";
import { createCustomer } from "../utils/customerAPICalls";
import { setCustomer } from "../helper";

export default function CustomerFormComponent(){
    const [user,setUser] = useContext(UserContext);
    
    return (
        <div style = {formWrapperStyle()}>
        <div style = {formStyle()}>
        <h1>Fill Out Information</h1>
            <input style = {inputStyle()} type = 'email' placeholder="Email" value = {user.email} onChange = {(e) => {setUser(prev => ({...prev, email: e.target.value}))}}></input>
            <input style = {inputStyle()} type = 'text' placeholder = "First Name" value = {user.firstName} onChange = {(e) => {setUser(prev => ({...prev,firstName: e.target.value}))}}></input>
            <input style = {inputStyle()} type = 'text' placeholder = "Last Name" value = {user.lastName} onChange = {(e) => {setUser(prev => ({...prev,lastName: e.target.value}))}}></input>
            <input style = {inputStyle()} type = 'number' placeholder = "Phone Number" value = {user.phoneNumber} onChange = {(e) => {setUser(prev => ({...prev,phoneNumber: e.target.value}))}}></input>
            <input style = {inputStyle()} type = 'text' placeholder = "State" value = {user.address.state} onChange = {(e) => {setUser(prev => ({...prev, address: {...prev.address,state: e.target.value}}))}}></input>
            <input style = {inputStyle()} type = 'text' placeholder = "City" value = {user.address.city} onChange = {(e) => {setUser(prev => ({...prev, address: {...prev.address,city: e.target.value}}))}}></input>
            <input style = {inputStyle()} type = 'number' placeholder = "Zipcode" value = {user.address.zipcode} onChange = {(e) => {setUser(prev => ({...prev,address: {...prev.address,zipcode: e.target.value}}))}}></input>
            <button style = {buttonStyles()} onClick = {() => {createCustomer(user).then((res)=> {
                if (res.status == 403) {console.log('user already exists')}
                if (res.status == 201) {setCustomer(user.email)}
                })}}>Submit</button>
        </div>
        </div>
    )
}