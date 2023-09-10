import { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext();

const AppGlobalContext = ({children}) =>{
    const [loading, setLoading] = useState([]); 
    const [ step, setStep ] = useState(0);

    return (
        <AppContext.Provider value={{loading, setLoading, step, setStep}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppGlobalContext;