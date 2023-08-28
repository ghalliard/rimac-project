import { createContext } from 'react';
import { useState } from 'react';


export const UserContext = createContext();

const UserGlobalContext = ({children}) =>{
    const [user, setUser] = useState(null);
    const [form, setForm] = useState({
        documentType: 'DNI',
        document: '',
        cellphone: '',
    });

    return (
        <UserContext.Provider value={{user, setUser, form, setForm}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserGlobalContext;