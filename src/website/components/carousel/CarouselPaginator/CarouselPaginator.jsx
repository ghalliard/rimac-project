

const CarouselPaginator = ({page, setPage}) => {
    const handlePageChange = (index) => setPage(page + index);

    return (
        <div>
            <button 
                className="prev"
                disabled={page === 0}
                onClick={() => handlePageChange(-1)}
            >atras</button>
            <span>{page+1}</span>
            <button 
                className="next"
                onClick={() => handlePageChange(1)}
                disabled={page === 2}
            >siguiente</button>
        </div>
    )
}

export default CarouselPaginator