import { useContext } from 'react';
import { UserContext } from '../context/userGlobalContext';

const useForm = () =>{
    const {form, setForm, formError, setFormError, formValidation, setFormValidation} = useContext(UserContext);

    const handleChange = (e) => {
        let {value} = e.target;
        const {name} = e.target;

        if(name === 'document'){
            value = value.replace(/[^0-9]/g, '');
            setForm({
                ...form,
                document: value,
            });
            setFormValidation({
                ...formValidation,
                isDocumentValid: false
            });

            if(value.length == 0){
                setFormError({
                    ...formError,
                    documentError: 'Este campo es requerido.'
                });
            } else if(value.length < 8){
                setFormError({
                    ...formError,
                    documentError: 'Documento inválido.',
                });
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
            value = value.replace(/[^0-9]/g, '');
            setForm({
                ...form,
                cellphone: value,
            });
            setFormValidation({
                ...formValidation,
                isCellphoneValid: false
            });

            if(value.length === 0){
                setFormError({
                    ...formError,
                    cellphoneError: 'Este campo es requerido.'
                });
            } else if(value.length < 9){
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
        if(name === 'documentType'){
            setForm({
                ...form,
                document: '',
                [name]: (name === 'documentType' && value === '') ? form.documentType : value,
            });
            setFormValidation({
                ...formValidation,
                isDocumentValid: false
            });
            setFormError({
                ...formError,
                documentError: 'Este campo es requerido.',
            });
        }
    }
    return { form, handleChange, formError, formValidation }
}

export default useForm;