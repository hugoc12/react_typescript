import './style.css';
import { useContext } from "react";
import { Context } from "../../contexts/ContextOrders";

function Button() {
    const context = useContext(Context);
    return (
        <button className="bttEnviar" onClick={()=>{
            const input = document.getElementById('inputName') as HTMLInputElement;
            context.setName({
                name:input.value
            })
        }}>ENVIAR</button>
    );
}

export default Button;