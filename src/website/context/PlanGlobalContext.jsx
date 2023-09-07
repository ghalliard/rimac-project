import { createContext } from 'react';
import { useState } from 'react';


export const PlanContext = createContext();

const PlanGlobalContext = ({children}) =>{
    const [plans, setPlans] = useState([]); 
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showPlans, setShowPlans] = useState(false);

    return (
        <PlanContext.Provider value={{plans, setPlans, selectedPlan, setSelectedPlan, showPlans, setShowPlans}}>
            {children}
        </PlanContext.Provider>
    )
}
export default PlanGlobalContext;