import { useState } from 'react';

const useForm = () =>{
    const [form, setForm] = useState({
        documentType: 'DNI',
        document: '',
        cellphone: '',
    });
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