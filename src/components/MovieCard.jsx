export const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;

  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
  const DEFAULT_IMG =
    'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

  return (
    <>
      <img
        src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
        alt={title}
      />
      <h1>{title}</h1>
      <div>User Score: {Math.round(vote_average)}%</div>
      <h2>Overview</h2>
      <div>{overview}</div>
      <h3>Genres</h3>
      <p>{genres.map(a => a.name).join(', ')}</p>
    </>
  );
};
