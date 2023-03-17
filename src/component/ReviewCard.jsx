import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReviewsById, patchReviewVotes } from '../utils/api';

export const ReviewCards = () => {

    const { review_id } = useParams();

    const [reviewCard, setReviewCard] = useState({});
    const [loading, setLoading] = useState(true);
    const [likeClicked, setLikeClicked] = useState(false);
    const [dislikeClicked, setDislikeClicked] = useState(false);

    const likes = () => {
        setReviewCard((currentCard) => {
          if (currentCard.review_id === reviewCard.review_id) {
            setLikeClicked(true)
            return {...currentCard, votes: currentCard.votes + 1}
          }
        })
        patchReviewVotes(review_id, 1)
        .catch((err) => {
            setReviewCard((currentCard) => {
                if (currentCard.review_id === reviewCard.review_id) {
                  return {...currentCard, votes: currentCard.votes - 1}
                }
              })
        })
    }

    const dislikes = () => {
        setReviewCard((currentCard) => {
          if (currentCard.review_id === reviewCard.review_id) {
            setDislikeClicked(true)
            return {...currentCard, votes: currentCard.votes - 1}
          }
        })
        patchReviewVotes(review_id, -1)
        .catch((err) => {
            setReviewCard((currentCard) => {
                if (currentCard.review_id === reviewCard.review_id) {
                  return {...currentCard, votes: currentCard.votes + 1}
                }
              })
        })
    }


    useEffect(() => {
        
        setLoading(true)
        getReviewsById(review_id)

        .then((result) => {

        setReviewCard(result)
        setLoading(false)

        })
    }, [review_id]);

    if (loading) return <h2>Loading...</h2>

    return (
        <section>
            <h2>Here's your requested reviews:</h2>
            <h1>Owner: {reviewCard.owner}</h1>
            <h2>Designer: {reviewCard.designer}</h2>
            <h3>Title: {reviewCard.title}</h3>
            <h3>Category: {reviewCard.category}</h3>
            <p>Comment: {reviewCard.review_body}</p>
            <img src={reviewCard.review_img_url} alt='img'/>
            <h2>Votes: {reviewCard.votes}</h2>
            <button onClick={likes} disabled={likeClicked}>Like</button>
            <button onClick={dislikes} disabled={dislikeClicked}>Dislike</button>
            <Link to={'/reviews'}>
            <button>Wanna Go Back?</button>
            </Link>
        </section>
    )
}