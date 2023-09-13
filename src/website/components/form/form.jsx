import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import {Select, SelectItem, Input, Checkbox } from "@nextui-org/react";
import './form.scss';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userGlobalContext';

const Form = () => {
    const { form, handleChange, formError, formValidation } = useForm();
    const [ formPrivacy, setFormPrivacy ] = useState(true);
    const [ formCommunication, setFormCommunication ] = useState(true);
    const [ formTouched, setFormTouched ] = useState({
        documentTouched: false,
        cellphoneTouched: false,
    });

    const { user, setForm, setFormValidation, setFormError, setUser } = useContext(UserContext);

    useEffect(() =>{
        if(user){
            setForm({
                documentType: 'DNI',
                document: '',
                cellphone: '',
            });
            setFormValidation({
                isDocumentValid: false,
                isCellphoneValid: false
            });
            setFormError({
                documentError: 'Este campo es requerido.',
                cellphoneError: 'Este campo es requerido.'
            });
            setUser(null);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() =>{
        setFormTouched({
            ...formTouched,
            documentTouched: false
        });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form.documentType]);

    const handleBlur = (e) =>{
        const { name } = e.target;
        if(name === 'document'){
            setFormTouched({
                ...formTouched,
                documentTouched: true
            });
        }
        if(name === 'cellphone'){
            setFormTouched({
                ...formTouched,
                cellphoneTouched: true
            });
        }

        if(name === 'privacy' || name === 'communication'){
            const parent = e.target.parentNode.parentNode.children[1];
            parent.classList.add('checkbox-error');
        }
    }

    const { fetchData } = useFetch('https://rimac-front-end-challenge.netlify.app/api/user.json');

    return (
        <div  className='second-section_form'>
            <div className='second-section_form_auth'>
                <Select 
                    aria-label='document-type'
                    name='documentType' 
                    size={'sm'}
                    selectedKeys={new Set([form.documentType])}
                    onChange={handleChange}
                    >
                    <SelectItem key={'DNI'} value={'DNI'}>
                        DNI
                    </SelectItem>
                    <SelectItem key={'CE'} value={'CE'}>
                        CE
                    </SelectItem>
                </Select>

                <Input
                name='document'
                value={form.document}
                onChange={handleChange}
                errorMessage={formTouched.documentTouched ? formError.documentError : ''}
                type="tel"
                label="Nro. de documento"
                maxLength={form.documentType === 'DNI' ? 8 : 9}
                isRequired={true}
                validationState={!formValidation.isDocumentValid && formTouched.documentTouched ? 'invalid' : undefined}
                onBlur={handleBlur}
                size={'sm'}/>
            </div>
                
            <Input 
                type="tel" 
                label="Celular" 
                size={'sm'} 
                className='mt-2'
                name='cellphone'
                value={form.cellphone}
                isRequired={true}
                maxLength='9'
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={formTouched.cellphoneTouched ? formError.cellphoneError : ''}
                validationState={!formValidation.isCellphoneValid && formTouched.cellphoneTouched ? 'invalid' : undefined}
            />

            <div className="second-section_form_checkbox">
                <Checkbox 
                    color="default"
                    name='privacy'
                    isSelected={formPrivacy}
                    onBlur={handleBlur}
                    onValueChange={setFormPrivacy}
                    isRequired={true}
                >Acepto la Política de Privacidad</Checkbox>
                <Checkbox 
                    color="default"
                    name='communication'
                    onBlur={handleBlur}
                    isSelected={formCommunication}
                    onValueChange={setFormCommunication}
                    isRequired={true}
                >Acepto la Política Comunicaciones Comerciales</Checkbox>
                <span 
                className='checkbox-error'
                style={{
                    display: formPrivacy && formCommunication ? 'none' : 'block'
                }}
                >Estos campos son requeridos.</span>
                
                <a>Aplican Términos y Condiciones</a>
            </div>

            <button 
                className='second-section_form_button'
                onClick={(event) =>{
                    const { target } = event;
                    if(formValidation.isDocumentValid && formValidation.isCellphoneValid && formPrivacy && formCommunication){
                        target.disabled = true;
                        fetchData();
                    } else{
                        setFormTouched({
                            cellphoneTouched: true,
                            documentTouched: true
                        });
                    }
                }}
                >Cotiza aquí</button>
        </div>
  )
}

export default Form;
