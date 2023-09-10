import { useContext } from 'react';
import { UserContext } from '../context/userGlobalContext';

const useForm = () =>{
    const {form, setForm} = useContext(UserContext);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: (name === 'documentType' && value === '') ? form.documentType : value,
        })
    }
    return { form, handleChange }
}

export default useForm;