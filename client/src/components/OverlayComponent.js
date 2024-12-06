import { buttonStyles } from "../styles/commonStyles";

export default function OverlayComponent({component,open,setOpen,mandatory}) {
    return (
        <div style = {{position: 'fixed',display: open ? 'block':'none', width: '100%', height: '100%', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5', textAlign: 'center'}}>
            {component}
            {mandatory ? null : <button style = {buttonStyles()} onClick = {() => {setOpen(false)}}>Close</button>}
        </div>
    )
}