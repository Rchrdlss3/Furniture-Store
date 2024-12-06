import { userModel } from "../helper";

export const createCustomer = async (customer) => {
    console.log(customer)
    const data = await fetch(`http://localhost:3000/customer/create`,{
        method: 'POST',
        body: JSON.stringify(customer),
        headers: {'Content-Type': 'application/json'}
    })
    return data
}

export const getEmail = () => {
    return localStorage.getItem('EMAIL');
} 

export const getCustomer = async () => {
    const email = getEmail();
    if (!email) {return userModel}
    const data = await fetch(`http://localhost:3000/customer/get?email=${email}`).then(data => {return data.json()})
    return data
    // Implement function to get customer by email
}