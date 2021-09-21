import { moviesList } from "../../fakeApi";
import MovieItem from "../MovieItem/MovieItem";
import "./StaticMoviesList.css";

function StaticMoviesList() {
  const displayMovies = () => {
    // <MovieItem
    //         title={movie.title}
    //         posterUrl={movie.posterUrl}
    //         plot={movie.plot}
    //         actors={movie.actors}
    //         genres={movie.genres}
    //         key={`${idx}-${movie.title}`}
    //       />
    return (
      moviesList.map((movie, idx) => {
        return (
          <MovieItem
            {...movie}
            key={`${idx}-${movie.title}`}
          />
        )
      })
    )
  }
  return (
    <section>
      <h2>Static Movies List</h2>

      <div className="movies-list">
        {
          displayMovies()
        }
      </div>
    </section>
  )
}

export default StaticMoviesList;