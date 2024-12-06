import { getEmail } from "./customerAPICalls"

export const getShoppingCart = async (items) => {
    const response = await fetch(`http://localhost:3000/order/getCart`, {
        method: 'POST',
        body: JSON.stringify({items: items}),
        headers: {'Content-Type': 'application/json'}
    })
    return response.json()
}

export const createDollyOrder = async (order) => {
    const response = await fetch(`http://localhost:3000/order/create`, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {'Content-Type': 'application/json'}
    })
    return response
}

export const getOrders = async () => {
    const response = await fetch(`http://localhost:3000/order/get?email=${getEmail()}`)
    .then(data => {return data})
    return response.json()
}