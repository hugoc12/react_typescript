import {useReducer} from "react"
import ButtonCounter from "./components/Button"

interface statesTypes{
  counter:number,
  nameUser:string,
  colorDiv:string,
  revealDiv:boolean,
}

interface actionCounter{
  type:'increment'|'decrement',
  value:number,
}

interface actionInput{
  type:'name',
  value:string,
}

interface actionColor{
  type:'dvcolor',
  value:'dvColor'|'dvColor dvColorBlue'
}

interface actionReveal{
  type:'dvReveal',
  value:boolean
}

function reducer<Type extends actionCounter | actionInput | actionColor | actionReveal>(state:statesTypes, action:Type):statesTypes{
  switch(action.type){
    case 'name':
      return{
        ...state,
        nameUser:action.value
      }
    case 'increment':
      return{
        ...state,
        counter:state.counter + action.value
      }
    case 'decrement':
      return{
        ...state,
        counter:state.counter - action.value
      }
    case 'dvcolor':
      return{
        ...state,
        colorDiv:action.value,
      }
    case 'dvReveal':
      return{
        ...state,
        revealDiv:action.value,
      }
    default:
      throw new Error();
  }
}

function App() {
  // const [counter, setCounter] = useState<number>(0);
  // const [nameUser, setNameUser] = useState<string>('');
  // const [colorDiv, setColorDiv] = useState<string>('dvColor');
  // const [revealDiv, setRevelDiv] = useState<boolean>(false);

  const initialStates:statesTypes = {
    counter:0,
    nameUser:'',
    colorDiv:'dvColor',
    revealDiv:false,
  }

  const [state, dispatch] = useReducer(reducer, initialStates);

  return (
    <>
      <p>This counter is.: {state.counter}</p>
      <button onClick={()=>dispatch({type:'increment',value:1})}>+</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>-</button>
      <p>Seja bem vindo: {state.nameUser}</p>
      <input id="inputName" className="inputName" type="text" placeholder="Digite seu nome:" defaultValue={state.nameUser}/>
      <button onClick={()=>{
        const input = document.getElementById('inputName') as HTMLInputElement;
        const value:string = input.value;
        dispatch({
          type:'name',
          value:value,
        })
      }}>SUBMIT</button>
      <div className={state.colorDiv} onClick={()=>{
        if(state.colorDiv == 'dvColor'){
          dispatch({
            type:'dvcolor',
            value:'dvColor dvColorBlue'
          })
        }else{
          dispatch({
            type:'dvcolor',
            value:'dvColor'
          })
        }
      }}>
      click to change color</div>
      <ButtonCounter action="sum" setState={dispatch}/>
      <ButtonCounter action="sub" setState={dispatch}/>
      <button onClick={()=>state.revealDiv?dispatch({type:'dvReveal', value:false}):dispatch({type:'dvReveal', value:true})}>REVEAL DIV</button>
      {state.revealDiv?<div style={{backgroundColor:'blue'}}>REVEAL</div>:<></>}
    </>
  )
}

export default App