import './style.css';
import { useContext } from 'react';
import { Context } from '../../contexts/contextProfile';

function Label2NameUser() {
    const context = useContext(Context);
    return (
        <div className={context.color.classDiv2}>
            <p>{context.name}</p>
            <input id='setNameLabel1' type="text" placeholder='Digite um novo nome...'/>
            <button onClick={()=>{
                const input = document.getElementById('setNameLabel1') as HTMLInputElement;
                context.setName({
                    type:'setName',
                    value:input.value,
                });
            }}>ENVIAR</button>
            <div className='divColorOptions'>
                <div className='colorOption colorOption1' onClick={()=>{
                    context.setColor({
                        type:'setColor',
                        value:{
                            classDiv1:'containerLabel1 colorOption1Container1',
                            classDiv2:'containerLabel2 colorOption1Container2',
                        }
                    })
                }}></div>
                <div className='colorOption colorOption2' onClick={()=>{
                    context.setColor({
                        type:'setColor',
                        value:{
                            classDiv1:'containerLabel1 colorOption2Container1',
                            classDiv2:'containerLabel2 colorOption2Container2',
                        }
                    })
                }}></div>
                <div className='colorOption colorOption3' onClick={()=>{
                    context.setColor({
                        type:'setColor',
                        value:{
                            classDiv1:'containerLabel1 colorOption3Container1',
                            classDiv2:'containerLabel2 colorOption3Container2',
                        }
                    })
                }}></div>
            </div>
        </div>
    );
}

export default Label2NameUser;