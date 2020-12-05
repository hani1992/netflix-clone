const requests = (filter) => ({
  getAllMovies: "/movies",
  getMovieByTitle: `/movies/title=${filter}`,
  getMovieByCategory: `/movies/category=${filter}`,
  getHorrorMovie: '/movies/category=TV Sci-Fi & Horror',
  getAcrionsMovie: '/movies/category=Action & Adventure',
  getTopRates: '/movies/toprates'
});

export default requests;
