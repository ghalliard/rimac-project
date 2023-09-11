import { useContext } from 'react';
import { UserContext } from '../context/userGlobalContext';

const useForm = () =>{
    const {form, setForm, formError, setFormError, formValidation, setFormValidation} = useContext(UserContext);

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === 'document'){
            if(value.length == 0){
                setFormError({
                    ...formError,
                    documentError: 'Este campo es requerido.'
                });
            } else if(value.length < 8){
                setFormValidation({
                    ...formValidation,
                    isDocumentValid: false
                });
                setFormError({
                        ...formError,
                        documentError: 'Documento inválido.',
                    }
                );
            } else if(value.length === 8){
                setFormValidation({
                    ...formValidation,
                    isDocumentValid: true
                });
                setFormError({
                    ...formError,
                    documentError: '',
                });
            }
        }
        if(name === 'cellphone'){
            if(value.length === 0){
                if(value.length == 0){
                    setFormError({
                        ...formError,
                        cellphoneError: 'Este campo es requerido.'
                    });
                }
            }else if(value.length < 9){
                setFormValidation({
                    ...formValidation,
                    isCellphoneValid: false
                });
                setFormError({
                    ...formError,
                    cellphoneError: 'Celular inválido.',
                });
            } else{
                setFormValidation({
                    ...formValidation,
                    isCellphoneValid: true
                });
                setFormError({
                    ...formError,
                    cellphoneError: '',
                });
            }
        }

        setForm({
            ...form,
            [name]: (name === 'documentType' && value === '') ? form.documentType : value,
        })

    }
    return { form, handleChange, formError, formValidation }
}

export default useForm;