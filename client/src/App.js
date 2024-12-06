import {createContext, useEffect, useState} from 'react'
import NavbarComponent from './components/NavbarComponent';
import {HashRouter, Route, Routes} from 'react-router-dom'
import { PageRoutes, userModel } from './helper';
import { getCustomer, getCustomerEmail } from './utils/customerAPICalls';
import OverlayComponent from './components/OverlayComponent';
import CustomerFormComponent from './components/CustomerFormComponent';

export const CartContext = createContext();
export const UserContext = createContext();
function App() {
  const [cart,setCart] = useState([]);
  const [user,setUser] = useState(userModel);
  const [popup,setPopup] = useState(false)
 
  useEffect(() => {
    getCustomer().then((response) => {
      if (response == userModel) {setPopup(true)}
      else { setUser(response) ; setPopup(false)}
    })
  },[])

  return (
    <HashRouter>
    <CartContext.Provider value = {[cart,setCart]}>
    <UserContext.Provider value = {[user,setUser]}>
      <OverlayComponent open = {popup} setOpen={setPopup} component={<CustomerFormComponent />}/>
      <NavbarComponent />
      <Routes>
        {PageRoutes.map((page) => {return <Route path = {page.path} element= {page.element} key = {page.name}/>})}
      </Routes>
      </UserContext.Provider>
    </CartContext.Provider>
    </HashRouter>
  );
}

export default App;
