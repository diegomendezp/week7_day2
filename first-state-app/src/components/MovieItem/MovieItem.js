function MovieItem({ posterUrl, title, plot, actors, genres, hasOscar, year, dynamic=false, deleteMovie, id }) {
  const displayGenres = () => {
    return (
      genres.map((genre, idx) => {
        return (
          <li key={`${title}-${genre}-${idx}`}>{genre}</li>
        )
      })
    )
  }
  return (
    <article className="movie-item">
      <img src={posterUrl} alt="movie poster" />
      <h3>Title: {title}</h3>
      <p>Plot: {plot}</p>
      <p>Actors: {actors}</p>
      <ul>
        {
          displayGenres()
        }
      </ul>
      { hasOscar ? <p>Ganador del Oscar</p> : <p>No ha ganado ningún Oscar</p> }
      <p>Year: {year}</p>

      {dynamic && <button onClick={() => deleteMovie(id)}>🗑</button> }
    </article>
  )
}

export default MovieItem;