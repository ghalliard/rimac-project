import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import {Select, SelectItem, Input, Checkbox} from "@nextui-org/react";
import './form.scss';

const Form = () => {
    const { form, handleChange, inputDocumentValidation } = useForm();
    
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
                    <SelectItem key={'OTHERS'} value={'OTHERS'}>
                        Other
                    </SelectItem>
                </Select>

                <Input
                name='document'
                value={form.document}
                onChange={handleChange}
                validationState={inputDocumentValidation ? 'invalid' : undefined}
                type="number"
                label="Nro. de documento"
                maxLength={8}
                isRequired={true}
                size={'sm'}/>
            </div>
                
            <Input 
                type="text" 
                label="Celular" 
                size={'sm'} 
                className='mt-4'
                name='cellphone'
                value={form.cellphone}
                isRequired={true}
                onChange={handleChange}
            />

            <div className="second-section_form_checkbox">
                <Checkbox 
                    color="default"
                    isRequired={true}
                >Acepto la Política de Privacidad</Checkbox>
                <Checkbox 
                    color="default"
                    isRequired={true}
                >Acepto la Política Comunicaciones Comerciales</Checkbox>
                <a>Aplican Términos y Condiciones</a>
            </div>

            <button 
                className='second-section_form_button'
                onClick={fetchData}
                >Cotiza aquí</button>
        </div>
  )
}

export default Form;
