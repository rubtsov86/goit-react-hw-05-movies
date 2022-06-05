import { useEffect, useState } from 'react';
import axios from 'axios';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = () => {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=81b3ecea3e846c75ec6e45ca643cbb3c&language=en-US&page=1`;
      const response = axios.get();
      return response;
    };

    const MakeReviewsData = async () => {
      const { data } = await fetchReviews();
      if (data.results.length === 0) {
        return;
      }
      const dataToSet = data.results.map(({ author, content, id }) => ({
        author,
        content,
        id,
      }));
      setReviews(dataToSet);
    };
    MakeReviewsData();
  }, [movieId]);

  return reviews.length === 0 ? (
    <p>We don't have any reviews of this movie</p>
  ) : (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
