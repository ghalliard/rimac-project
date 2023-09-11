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
    const [formError, setFormError] = useState({
        documentError: 'Este campo es requerido.',
        cellphoneError: 'Este campo es requerido.'
    });
    const [formValidation, setFormValidation] = useState({
        isDocumentValid: false,
        isCellphoneValid: false
    });

    return (
        <UserContext.Provider value={{user, setUser, form, setForm, formError, setFormError, formValidation, setFormValidation}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserGlobalContext;