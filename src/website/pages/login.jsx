import '../styles/login.scss';
import Form from '../components/form/form';

const Login = () => {

    return (
        <main className='main-login'>
            <div className='content'> 
                <section className="first-section">
                    <h1 className="first-section_title">
                        <span>Seguro Salud Flexible</span><br/>
                        Creado para <br/>
                        ti y tu familia
                    </h1>
                    <div className="first-section_image-container">
                        <img 
                            src="src/assets/image217.jpg" 
                            alt="image responsive" 
                            srcSet="src/assets/image220.jpg 1024w"
                        />
                    </div>
                </section>

                <section className='second-section'>
                    <h1 className="first-section_title second-section_title">
                        <span>Seguro Salud Flexible</span><br/>
                        Creado para ti y tu <br/> 
                        familia
                    </h1>
                    <p className='second-section_subtitle'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</p>
                    <Form/>
                </section>
            </div>
            <div className='violet-blur'></div>
            <div className='aqua-blur'></div>
        </main> 
    )
}
  
export default Login;