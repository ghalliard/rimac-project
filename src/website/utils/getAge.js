export const getAge = (date) =>{
    console.log(date);
    return new Date().getFullYear() - new Date(date).getFullYear();
}