const IMG_PATH = 'https://image.tmdb.org/t/p/w500/'
// const rate = document.querySelector(".rate");

const MovieCard = ({ movie }) => {
    return (
      <div className="card shadow-sm">
        {movie.poster_path ? (
          <img
            src={`${IMG_PATH}${movie.poster_path}`}
            alt={movie.title}
            className="card-img-top"
          />
        ) : (
          <div className="text-center p-5 bg-light">No Image</div>
        )}
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>  
          <h6 className="card-title">Date: {movie.release_date}</h6>
          <h6 className="card-title rate">Rating: {movie.vote_average}</h6>
           
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  