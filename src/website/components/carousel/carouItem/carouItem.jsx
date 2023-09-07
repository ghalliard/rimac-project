import { useContext } from 'react';
import './carouItem.scss';
import { PlanContext } from '../../../context/PlanGlobalContext';

const CarouItem = ({plan}) => {
    const { setSelectedPlan } = useContext(PlanContext);
    return (
        <div className='carousel-item'>
            <div className='carousel-item_title'>
                <div>
                    <h1>{plan.name}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <path d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z" fill="url(#paint0_linear_12_165128)"/>
                        <path d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z" fill="url(#paint1_linear_12_165128)"/>
                        <defs>
                            <linearGradient id="paint0_linear_12_165128" x1="40.6163" y1="29.9261" x2="58.0062" y2="39.8646" gradientUnits="userSpaceOnUse">
                            <stop offset="0.35" stopColor="#F7052D"/>
                            <stop offset="0.85" stopColor="#CA5AFA"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_12_165128" x1="1.75" y1="4.36304" x2="26.0494" y2="63.992" gradientUnits="userSpaceOnUse">
                            <stop offset="0.272135" stopColor="#34263B"/>
                            <stop offset="0.658079" stopColor="#13172C"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p>
                    <span>COSTO DEL PLAN</span><br/>
                    ${plan.price} al mes
                </p>
            </div>
            
            <ul className='carousel-item_description'>
                {plan.description.map((des, index) =>{
                    return (
                        <li key={`description-${index+1}`}>
                            <p>{des}</p>
                        </li>
                    )
                })}
            </ul>

            <button 
                className="carousel-item_button"
                onClick={() =>{
                    setSelectedPlan(plan)
                }}
            >Seleccionar plan</button>
        </div>
  )
}

export default CarouItem;