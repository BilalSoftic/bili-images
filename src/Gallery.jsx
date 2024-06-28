import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAppContext } from './Context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
function Gallery() {
  const { searchValue } = useAppContext();

  const response = useQuery({
    queryKey: ['images', searchValue],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchValue}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className='image-container'>
        <div className='loading'></div>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>Error</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    );
  }
  return (
    <section className='image-container'>
      {results.map((image) => {
        return (
          <img
            className='img'
            key={image.id}
            src={image?.urls?.regular}
            alt={image.alt_description}
          />
        );
      })}
    </section>
  );
}
export default Gallery;
