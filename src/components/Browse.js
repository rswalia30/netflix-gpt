import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  // Fetch Data
  useNowPlayingMovies();

  return (
    <>
      <h1>This is Browse</h1>
    </>
  );
};

export default Browse;
