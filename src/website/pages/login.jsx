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
                            src="https://firebasestorage.googleapis.com/v0/b/softtek-ffe0b.appspot.com/o/image217.jpg?alt=media&token=18a7820d-8521-43e3-904a-2e5b4e4291e9" 
                            alt="image responsive" 
                            srcSet="https://firebasestorage.googleapis.com/v0/b/softtek-ffe0b.appspot.com/o/image220.jpg?alt=media&token=4aa64596-b31f-4cb2-af23-60274f5d523f 1024w"
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