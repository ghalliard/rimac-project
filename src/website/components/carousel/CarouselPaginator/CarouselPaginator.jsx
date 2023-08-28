import './carouselPaginator.scss';

const CarouselPaginator = ({page, setPage}) => {
    const handlePageChange = (index) => setPage(page + index);

    return (
        <div className="carousel-paginator">
            <button 
                className="carousel-paginator_prev"
                disabled={page === 0}
                onClick={() => handlePageChange(-1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clipPath="url(#clip0_506_365)">
                    <circle cx="16" cy="16" r="15" strokeWidth="2"/>
                    <path d="M17.295 21.2049L12.085 15.9999L17.295 10.7949L18.705 12.2049L14.915 15.9999L18.705 19.7949L17.295 21.2049Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_506_365">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>

            <span>{page+1}/3</span>

            <button 
                className="carousel-paginator_next"
                onClick={() => handlePageChange(1)}
                disabled={page === 2}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clipPath="url(#clip0_506_374)">
                        <circle cx="16" cy="16" r="15" strokeWidth="2"/>
                        <path d="M14.7049 21.2049L13.2949 19.7949L17.0849 15.9999L13.2949 12.2049L14.7049 10.7949L19.9149 15.9999L14.7049 21.2049Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_506_374">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    )
}

export default CarouselPaginator