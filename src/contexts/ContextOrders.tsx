import { createContext, ReactNode, useReducer, useContext } from "react";

interface statesOrders{ // INTERFACE PARA DEFINIR OS TIPOS DAS VARIÁVEIS DE ESTADO.
    name:string,
}

interface contextProps{ // ACESSO INDIRETO AS VARIAVEIS DE ESTADO E DISPATCH.
    name:string,
    setName(value:statesOrders):void,
}

function reducer(state:statesOrders, action:statesOrders){
    return{
        ...state,
        name:action.name
    }
}

export const Context = createContext<contextProps>({ // VALORES INICIAIS
    name:'',
    setName:()=>{},
});

function ContextOrders({children}:{children:ReactNode}){
    const [state, dispatch] = useReducer(reducer, useContext(Context))
    return (
        <Context.Provider value={{
            name:state.name,
            setName:(value:statesOrders)=>{
                dispatch(value);
            }
        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextOrders;