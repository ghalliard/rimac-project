import { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext();

const AppGlobalContext = ({children}) =>{
    const [loading, setLoading] = useState([]); 

    return (
        <AppContext.Provider value={{loading, setLoading}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppGlobalContext;