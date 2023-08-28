import { Radio } from '@nextui-org/react';
import './plan-card.scss';
import { useContext } from 'react';
import { PlanContext } from '../../context/PlanGlobalContext';
import useFetch from '../../hooks/useFetch';


const PlanCard = ({data}) =>{
    const { plans } = useContext(PlanContext);
    const { fetchData } = useFetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');

    const handlePlans = () =>{
        if(plans.lenght === 0){
            fetchData();
        } 
    }

    return (    
        <Radio 
            onClick={handlePlans}
            value={data.key}
            size='lg'
            classNames={{
                base: 'flex-col pt-4 pb-10 px-6',
            }}
            className='plan-card'

        >
            <div className='plan-card_title'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M29.9586 9.54748C30.0493 9.08772 29.987 8.6109 29.7811 8.18991C29.5752 7.76892 29.2372 7.42693 28.8186 7.21623L16.9561 1.28498C16.6589 1.1376 16.3316 1.06091 15.9998 1.06091C15.6681 1.06091 15.3408 1.1376 15.0436 1.28498L3.18108 7.21623C2.76249 7.42693 2.42442 7.76892 2.21855 8.18991C2.01268 8.6109 1.95035 9.08772 2.04107 9.54748L3.70233 17.8512C4.38519 21.2687 6.31885 24.3082 9.12483 26.375L9.63857 26.75C9.66945 25.9952 9.79116 25.2469 10.0011 24.5212C7.76246 22.755 6.22643 20.2489 5.66857 17.4525L3.99983 9.15498C3.99435 9.12537 3.99857 9.09479 4.01186 9.06777C4.02514 9.04075 4.04679 9.01873 4.07358 9.00498L15.9361 3.07373C15.9556 3.06432 15.9769 3.05943 15.9986 3.05943C16.0202 3.05943 16.0416 3.06432 16.0611 3.07373L27.9236 8.99998C27.9504 9.01373 27.972 9.03575 27.9853 9.06277C27.9986 9.08979 28.0028 9.12037 27.9973 9.14998L26.3361 17.455C26.1401 18.4316 25.8235 19.3802 25.3936 20.2787C25.9228 20.7719 26.393 21.3248 26.7948 21.9262C27.5042 20.6526 28.0103 19.276 28.2948 17.8462L29.9586 9.54748Z" fill="url(#paint0_linear_12_156236)"/>
                    <path d="M22.8662 20.135L20.9125 19.0562C21.5444 18.7122 22.0718 18.2042 22.4392 17.5856C22.8066 16.967 23.0003 16.2607 23 15.5412V13.9587C23 12.8979 22.5786 11.8805 21.8284 11.1303C21.0783 10.3802 20.0609 9.95874 19 9.95874C17.9391 9.95874 16.9217 10.3802 16.1716 11.1303C15.4214 11.8805 15 12.8979 15 13.9587V15.5412C14.9997 16.2607 15.1934 16.967 15.5608 17.5856C15.9282 18.2042 16.4556 18.7122 17.0875 19.0562L15.1338 20.135C13.8821 20.8259 12.8385 21.8397 12.1115 23.0708C11.3845 24.3019 11.0007 25.7053 11 27.135V29C11 29.2652 11.1054 29.5196 11.2929 29.7071C11.4804 29.8946 11.7348 30 12 30H26C26.2652 30 26.5196 29.8946 26.7071 29.7071C26.8946 29.5196 27 29.2652 27 29V27.1387C27 25.7084 26.6165 24.3042 25.8895 23.0724C25.1625 21.8406 24.1185 20.8263 22.8662 20.135Z" fill="url(#paint1_linear_12_156236)"/>
                    <defs>
                    <linearGradient id="paint0_linear_12_156236" x1="2.00049" y1="1.06091" x2="14.9744" y2="32.8768" gradientUnits="userSpaceOnUse">
                    <stop offset="0.272135" stopColor="#34263B"/>
                    <stop offset="0.658079" stopColor="#13172C"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_12_156236" x1="11.4186" y1="11.5316" x2="27.5211" y2="24.3871" gradientUnits="userSpaceOnUse">
                    <stop offset="0.35" stopColor="#F7052D"/>
                    <stop offset="0.85" stopColor="#CA5AFA"/>
                    </linearGradient>
                    </defs>
                </svg>
                <h1>{data.title}</h1>
            </div>
            <p className='plan-card_description'>{data.subtitle}</p>
        </Radio>
    )
}

export default PlanCard;