import { useEffect, useState } from "react";
import CarouselPaginator from "../CarouselPaginator/CarouselPaginator";
import CarouItem from "../carouItem/carouItem";
import './carousel.scss';

const Carousel = () => {
  const [page, setPage] = useState(0);

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
    <div>
        <div className="carousel-container">
          <CarouItem/>
          <CarouItem/>
          <CarouItem/>
        </div>
        <CarouselPaginator page={page} setPage={setPage} />
    </div>
  )
}

export default Carousel