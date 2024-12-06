import ShopPage from "./pages/shopPage";
import HomePage from "./pages/homePage";
import CheckoutPage from "./pages/checkoutPage";
import OrderPage from "./pages/orderPage";

export const dollyColor = '#f94550'

export const PageRoutes = [
    {
        name: "Home",
        path: "/",
        element: <HomePage />
    },
    {
        name: "Shop",
        path: "/shop",
        element: <ShopPage />
    },
    {
        name: "Checkout",
        path: "/checkout",
        element: <CheckoutPage />
    },
    {
        name: "Orders",
        path: "/orders",
        element: <OrderPage/>
    }
]

export const CheckoutHeaders = ['Product','Price']

export const userModel = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: {
        state: '',
        city: '',
        zipcode: ''
    }
}

export const setCustomer = (email) => {
    localStorage.setItem("EMAIL",email)
}