import { UserContext } from '../context/userGlobalContext';
import '../styles/home.scss';
import { useContext, useEffect, useState } from 'react';
import PlanCard from '../components/plan-card/plan-card';
import { RadioGroup } from '@nextui-org/react';
import Carousel from '../components/carousel/carousel/Carousel';
import { PlanContext } from '../context/PlanGlobalContext';
import useFetch from '../hooks/useFetch';
import { Progress } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppGlobalContext';

const Home = () =>{
    const { step, setStep } = useContext(AppContext);
    const [planFor, setPlanFor] = useState(null);
    const { user, form, setUser, setForm } = useContext(UserContext);
    const { plans, selectedPlan, setShowPlans, setSelectedPlan, showPlans } = useContext(PlanContext);
    const { fetchData } = useFetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');
    const navigate = useNavigate();

    const handleBack = () =>{
        if(step === 100){
            setStep(step - 50);
            setSelectedPlan(null);
            setShowPlans(false);
            setPlanFor(null);
        }
        if(step === 50 || step == 75){
            setForm({
                documentType: 'DNI',
                document: '',
                cellphone: '',
            });
            setUser(null);
            setShowPlans(false);
            navigate('/login');
        }
    }

    useEffect(() =>{
        const carousel = document.getElementById('carousel-scroll');
        carousel.scrollIntoView({behavior: 'smooth'});
    }, [showPlans]);

    useEffect(() =>{
        window.scrollTo(0, 0);
        
        if(plans.length === 0){
            fetchData();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTransition = () =>{
        const width = (step == 100) ? document.querySelector('.main-home').clientWidth : 0;
        const carousel = document.getElementById('carousel-component');

        (step == 100) ? carousel.style.height = 0 : carousel.style.height = 'auto';
        
        document.querySelectorAll('.step').forEach(element => {
            element.style.transform = `translateX(-${width}px)`;
        });
    }

    useEffect(() =>{
        if(step == 100 || step == 50){
            handleTransition();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step]);

    const cards = [
        {
            title: 'Para mí',
            subtitle: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
        },
        {
            title: 'Para alguien más',
            subtitle: 'Realiza una cotización para uno de tus familiares o cualquier persona.'
        }
    ];

    return (
        <div>
            <section className='stepper-indicator'>
                <button
                    onClick={() => handleBack()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_757_471)">
                            <circle cx="12" cy="12" r="11" stroke="#4F4FFF" strokeWidth="2"/>
                            <path d="M12.9715 15.9037L9.06396 11.9999L12.9715 8.09619L14.029 9.15369L11.1865 11.9999L14.029 14.8462L12.9715 15.9037Z" fill="#4F4FFF"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_757_471">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <p>Paso { step <= 75 ? '1' : '2' } de 2</p>
                <Progress value={step} aria-label='step-progress'></Progress>

            </section>
            
            <main className='main-home'>
                <div className='step step-1' id="carousel-component">
                    <h1 className='step-1_title'>{user.name} ¿Para quién deseas cotizar?</h1>
                    <p className='step-1_subtitle'>Selecciona la opción que se ajuste más a tus necesidades.</p>

                    <RadioGroup 
                        className='step-1_plan-card-container gap-4'
                        aria-label='plans-group'
                        name='planFor'
                        value={planFor}
                        onValueChange={setPlanFor}
                    >
                        {cards.map((element, index) => <PlanCard  data={{...element, key: index+1}} key={`plan-${index+1}`}/>)}
                    </RadioGroup>

                    <Carousel />
                </div>

                <div className='step step-2'>
                    <div className='step-container'>
                        <h1 className='step-2_title'>Resumen del seguro</h1>

                        <div className='step-2_summary-card'>
                            <div className='step-2_summary-card_title'>
                                <span>Precios calculados para:</span>
                                <p>{ user?.name } { user?.lastName }</p>
                            </div>
                            
                            <div className='step-2_summary-card_data'>
                                <p>Responsable de pago</p>
                                <p>DNI: { form.document }</p>
                                <p>Celular: +51 { form.cellphone }</p>
                            </div>

                            <div className='step-2_summary-card_data'>
                                <p>Plan elegido</p>
                                <p>{ selectedPlan?.name }</p>
                                <p>Costo del plan: ${ selectedPlan?.price } al mes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        
    )
}

export default Home;