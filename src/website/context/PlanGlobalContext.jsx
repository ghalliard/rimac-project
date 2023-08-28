import { createContext } from 'react';
import { useState } from 'react';


export const PlanContext = createContext();

const PlanGlobalContext = ({children}) =>{
    const [plans, setPlans] = useState([]); 
    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <PlanContext.Provider value={{plans, setPlans, selectedPlan, setSelectedPlan}}>
            {children}
        </PlanContext.Provider>
    )
}
export default PlanGlobalContext;