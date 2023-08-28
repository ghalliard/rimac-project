import { UserContext } from '../context/userGlobalContext';
import '../styles/home.scss';
import { useContext, useState } from 'react';
import PlanCard from '../components/plan-card/plan-card';
import { RadioGroup } from '@nextui-org/react';
import Carousel from '../components/carousel/carousel/Carousel';

const Home = () =>{
    const [planFor, setPlanFor] = useState(null);

    const { data } = useContext(UserContext);
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
            <h1 className='main-home_title'>{data.name} ¿Para quién deseas cotizar?</h1>
            <p className='main-home_subtitle'>Selecciona la opción que se ajuste más a tus necesidades.</p>

            <RadioGroup 
                className='main-home_plan-card-container'
                aria-label='plans-group'
                name='planFor'
                value={planFor}
                onValueChange={setPlanFor}
            >
                {cards.map((element, index) => <PlanCard  data={{...element, key: index+1}} key={`plan-${index+1}`}/>)}
            </RadioGroup>

            <Carousel/>
        </main>
    )
}

export default Home;