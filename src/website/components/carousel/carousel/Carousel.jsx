import { useContext, useEffect, useState } from "react";
import CarouselPaginator from "../CarouselPaginator/CarouselPaginator";
import CarouItem from "../carouItem/carouItem";
import './carousel.scss';
import { PlanContext } from './../../../context/PlanGlobalContext';
import { getAge } from "../../../utils/getAge";
import { UserContext } from "../../../context/userGlobalContext";

const Carousel = () => {
  const [page, setPage] = useState(0);
  const { plans, showPlans } = useContext(PlanContext);
  const { user } = useContext(UserContext); 

  useEffect(() =>{
    const handleTransition = () =>{
      const width = document.querySelector('.carousel-container').clientWidth;
      
      document.querySelectorAll('.carousel-item').forEach(element =>{
        element.style.transform = `translateX(-${(width*page) - 16*page}px)`;
      });
    }
    handleTransition();
  }, [page]);

  return (
    <div style={{ 
      height: showPlans? 'auto' : 0,
      overflowY: showPlans? 'visible' : 'hidden',
      marginTop: '24px'
     }}
     id="carousel-scroll"
     className="carousel"
     >
        <div className="carousel-container">
          {plans.filter(element => getAge(user.birthDay) <= element.age).map((element, index) =>{
            return <CarouItem key={`carouselItem-${index}`} plan={element}/>
          })}
        </div>
        <CarouselPaginator page={page} setPage={setPage} />
    </div>
  )
}

export default Carousel