import { NavLink } from "react-router";
import { PageRoutes } from "../helper";
import { navLinkStyles } from "../styles/commonStyles";

export default function NavbarComponent() {
    return (
        <div style = {{display: 'flex'}}>
            <div style = {{textAlign: 'left',fontSize: '2vh', fontWeight: 'bold'}}>Rich Furniture</div>
            {PageRoutes.map((page) => {return <NavLink 
            to = {page.path} 
            key = {page.name}
            style = {({isActive,isPending,isTransitioning}) => {return navLinkStyles(isActive)}}
            >{page.name}</NavLink>})}
        </div>
    )
}