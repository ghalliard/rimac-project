import { createContext } from 'react';
import { useState } from 'react';


export const UserContext = createContext();

const UserGlobalContext = ({children}) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <UserContext.Provider value={{data, setData, loading, setLoading}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserGlobalContext;