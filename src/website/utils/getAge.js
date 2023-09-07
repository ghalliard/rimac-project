export const getAge = (date) =>{    
    return new Date().getFullYear() - new Date(date).getFullYear();
}