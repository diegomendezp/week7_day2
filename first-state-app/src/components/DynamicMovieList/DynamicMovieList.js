import React from "react";
import { moviesList } from "../../fakeApi";
import MovieItem from "../MovieItem/MovieItem";

class DynamicMovieList extends React.Component {
  state = {
    movies: moviesList,
    showOscarMovies: false
  }

  displayMovies = () => {
    const filteredMovies = this.state.movies.filter(movie => movie.hasOscar === this.state.showOscarMovies)
    return (
      filteredMovies.map((movie) => {
        return <MovieItem dynamic={true} key={`${movie.id}-${movie.title}`} {...movie} deleteMovie={(id) => this.deleteMovie(id)}/>
      })
    )
  }

  sortByYear = () => {
    // const moviesCopy = [...this.state.movies];
    const moviesCopy = this.state.movies.map(movie => movie);

    this.setState({
      ...this.state,
      movies: moviesCopy.sort((movie1, movie2) => movie1.year - movie2.year)
    })
  }

  deleteMovie = (id) => {
    this.setState({
      ...this.state,
      movies: this.state.movies.filter(movie => movie.id !== id)
    })
  }

  toggleShowOscarMovies = () => {
    // this.setState({
    //   showOscarMovies: !this.state.showOscarMovies
    // })
    this.setState({
      ...this.state,
      showOscarMovies: this.state.showOscarMovies ? false : true
    })
  }

  addMovie = () => {
    const moviesCopy = [...this.state.movies];
    moviesCopy.push({
      id: Math.floor(Math.random() * 100), title: "Ironhack Bootcamp", year: "2021",
      hasOscar: true,
      runtime: "muchas", genres: ["Terror", "Fantasy", "Drama", "Comedy"], director: "Víctor Rodríguez", actors: "Erik, Germán Álvarez, Teo, Guille, Diego Méndez", plot: "", posterUrl: "https://www.aial.es/wp-content/uploads/2018/11/Logo-Ironhack.jpg" 
    })

    this.setState({
      ...this.state,
      movies: moviesCopy
    })
  }

  render(){
    
    return(
      <section>
        <h2>Dynamic movies list</h2>
        <button onClick={() => this.sortByYear()}>Ordenar por orden cronológico</button>
        <button onClick={() => this.toggleShowOscarMovies()}>{this.state.showOscarMovies ? 'Ocultar películas ganadoras de un Oscar' : 'Mostrar películas ganadoras de un Oscar'}</button>
        <button onClick={() => this.addMovie()}>Añadir película</button>
        <div className="movies-list">
          {
            this.displayMovies()
          }
        </div>
      </section>
    )
  }

}

export default DynamicMovieList