import { useContext } from 'react';
import { UserContext } from '../context/userGlobalContext';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppGlobalContext';
import { PlanContext } from './../context/PlanGlobalContext';
import { getAge } from '../utils/getAge';

const useFetch = (url) =>{
    const navigate = useNavigate();
    const { setUser, user } = useContext(UserContext);
    const { setLoading } = useContext(AppContext);
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
                setUser(data);
                navigate('/home');
            }
            else{
                setPlans(data.list.filter(element => getAge(user.birthday) <= element.age));
                console.log(getAge('02-04-1990'));
            }
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }

    return { fetchData }
}
export default useFetch;