import { useState, createContext, ReactNode } from "react";

interface valuesContext{
    name:string,
    setName:(name:string)=>void,
}

export const Context = createContext<valuesContext>({
    name:'',
    setName:()=>{}
});

function ContextProfileProvider({children}:{children:ReactNode}) {
    const [nameUser, setNameUser] = useState<string>('Hugo');
    return (
        <Context.Provider value={{
            name:nameUser,
            setName:(name:string)=>{
                setNameUser(name);
            }
        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProfileProvider;