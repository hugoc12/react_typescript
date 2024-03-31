import './style.css';
import { useContext } from 'react';
import { Context } from '../../contexts/contextProfile';

function Label2NameUser() {
    const context = useContext(Context);
    return (
        <div className="containerLabel2">
            <p>{context.name}</p>
            <input id='setNameLabel1' type="text" placeholder='Digite um novo nome...'/>
            <button onClick={()=>{
                const input = document.getElementById('setNameLabel1') as HTMLInputElement;
                context.setName(input.value);
            }}>ENVIAR</button>
        </div>
    );
}

export default Label2NameUser;