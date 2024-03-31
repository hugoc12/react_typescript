import './style.css';
import { useContext } from 'react';
import { Context } from '../../contexts/contextProfile';

function Label1NameUser() {
    const context = useContext(Context);
    return (
        <div className="containerLabel1">
            <p>{context.name}</p>
            <input id='setNameLabel2' type="text" placeholder='Digite um novo nome...'/>
            <button onClick={()=>{
                const input = document.getElementById('setNameLabel2') as HTMLInputElement;
                context.setName(input.value);
            }}>ENVIAR</button>
        </div>
    );
}

export default Label1NameUser;