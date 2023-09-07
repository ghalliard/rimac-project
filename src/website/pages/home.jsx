import { UserContext } from '../context/userGlobalContext';
import '../styles/home.scss';
import { useContext, useEffect, useState } from 'react';
import PlanCard from '../components/plan-card/plan-card';
import { RadioGroup } from '@nextui-org/react';
import Carousel from '../components/carousel/carousel/Carousel';
import { PlanContext } from '../context/PlanGlobalContext';
import useFetch from '../hooks/useFetch';

const Home = () =>{
    const [planFor, setPlanFor] = useState(null);
    const { user, form } = useContext(UserContext);
    const { plans, selectedPlan } = useContext(PlanContext);
    const { fetchData } = useFetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');

    useEffect(() =>{
        window.scrollTo(0, 0);
        
        if(plans.length === 0){
            fetchData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() =>{
        const handleTransition = () =>{
            const width = document.querySelector('.main-home').clientWidth;
            const carousel = document.getElementById('carousel-component')
            carousel.style.height = 0;
            
            document.querySelectorAll('.step').forEach(element => {
                element.style.transform = `translateX(-${width}px)`;
            });
        }
        
        if(selectedPlan){
            handleTransition();
        }
    }, [selectedPlan]);

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

                <Carousel/>
            </div>

            <div className='step step-2'>
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
        </main>
    )
}

export default Home;