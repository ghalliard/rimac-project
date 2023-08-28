//import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/userGlobalContext';
import { useNavigate } from 'react-router-dom';

const useFetch = (url) =>{
    const navigate = useNavigate();
    const { data, setData, loading, setLoading } = useContext(UserContext);
    
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
            setData(data);
            navigate('/home');
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }

    return { fetchData, data, loading }
}
export default useFetch;