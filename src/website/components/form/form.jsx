import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import {Select, SelectItem, Input, Checkbox} from "@nextui-org/react";
import './form.scss';

const Form = () => {
    const { form, handleChange } = useForm();
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
                type="text"
                label="Nro. de documento"
                size={'sm'}/>
            </div>
                
            <Input 
                type="text" 
                label="Celular" 
                size={'sm'} 
                className='mt-4'
                name='cellphone'
                value={form.cellphone}
                onChange={handleChange}
            />

            <div className="second-section_form_checkbox">
                <Checkbox color="default">Acepto la Política de Privacidad</Checkbox>
                <Checkbox color="default">Acepto la Política Comunicaciones Comerciales</Checkbox>
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
