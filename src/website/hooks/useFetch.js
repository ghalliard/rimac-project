import { useContext } from 'react';
import { UserContext } from '../context/userGlobalContext';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppGlobalContext';
import { PlanContext } from './../context/PlanGlobalContext';

const useFetch = (url) =>{
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const { setLoading, setStep } = useContext(AppContext);
    const { setPlans } = useContext(PlanContext);
    
    const fetchData = () =>{
        setLoading(true);
        fetch(url)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else{
                throw new Error('ups hubo un error');
            }
        })
        .then(data =>{
            // eslint-disable-next-line no-prototype-builtins
            if(data.hasOwnProperty('name')){
                setStep(50);
                setUser(data);
                navigate('/home');
            }
            else{
                setPlans(data.list);
            }
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }

    return { fetchData }
}
export default useFetch;