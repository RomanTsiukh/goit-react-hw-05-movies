export const MovieCard = ({ movie }) => {
  const { poster_path, title } = movie;

  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
  const DEFAULT_IMG =
    'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

  return (
    <>
      <img
        src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
        alt={title}
      />
    </>
  );
};
