import { dollyColor } from "../helper"

export const buttonStyles = () => {
    return {
        backgroundColor: dollyColor, 
        border: 'none', 
        color: '#fff', 
        width: 100, 
        height: 25, 
        borderRadius: '50px',
        margin: '5px'
    }
}

export const navLinkStyles = (isActive) => {
    return {
        textTransform: 'capitalize',
        marginLeft: '5px',
        textDecoration: 'none',
        color: isActive ? dollyColor : 'inherit',
        fontWeight: '600'
    }
}

export const inputStyle = () => {
    return {
        display: 'flex',
        width: '200px', 
        height: '25px',
        margin: '5px',
        backgroundColor: 'rgba(0,0,0,0)',
        border: '1px solid',
        borderRadius: '5px'
    }
}
export const formWrapperStyle = () => {
    return {
        justifyItems: 'center', alignContent: 'center', height: '80%'
    }
}
export const formStyle = () => {
    return {
        backgroundColor: 'white', 
        height: '80%', 
        width: '30%', 
        justifyItems: 'center',
        alignContent:'center', 
        borderRadius: '5%'
    }
}