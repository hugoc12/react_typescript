import { createContext, ReactNode, useReducer } from "react";

type colorDiv = {
    classDiv1:'containerLabel1 colorOption1Container1'|'containerLabel1 colorOption2Container1'|'containerLabel1 colorOption3Container1',
    classDiv2:'containerLabel2 colorOption1Container2'|'containerLabel2 colorOption2Container2'|'containerLabel2 colorOption3Container2',
}

interface statesTypes{ // 1º INTERFACE PARA DEFINIR SUAS STATES
    name:string,
    color:colorDiv,
}

interface actionSetName{
    type:'setName',
    value:string,
}

interface actionSetColor{
    type:'setColor',
    value:colorDiv,
}

interface valuesContext{ // 2º INTERFACE PARA DEFINIR VALORES DE CONTEXTO
    name:string,
    setName:(value:actionSetName)=>void,
    color:colorDiv,
    setColor:(value:actionSetColor)=>void,
}

function reducer<Type extends actionSetName|actionSetColor>(state:statesTypes, action:Type){
    switch(action.type){
        case 'setName':
            return{
                ...state,
                name:action.value
            }
        case 'setColor':
            return{
                ...state,
                color:{
                    classDiv1:action.value.classDiv1,
                    classDiv2:action.value.classDiv2,
                }
            }
    }
}

export const Context = createContext<valuesContext>({
    name:'',
    setName:()=>{},
    color:{
        classDiv1:'containerLabel1 colorOption1Container1',
        classDiv2:'containerLabel2 colorOption1Container2',
    },
    setColor:()=>{},
});

const initialValues:statesTypes = {
    name:'Hugo',
    color:{
        classDiv1:'containerLabel1 colorOption1Container1',
        classDiv2:'containerLabel2 colorOption1Container2',
    },
}

function ContextProfileProvider({children}:{children:ReactNode}) {
    const [state, dispatch] = useReducer(reducer, initialValues);
    return (
        <Context.Provider value={{
            name:state.name,
            color:state.color,
            setName:(value:actionSetName)=>{
                dispatch(value)
            },
            setColor:(value:actionSetColor)=>{
                dispatch(value)
            }
        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProfileProvider;