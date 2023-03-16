import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../utils/api';

export const ReviewCards = () => {

    const { review_id } = useParams();

    const [reviewCard, setReviewCard] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setLoading(true)
        getReviewsById(review_id)

        .then((result) => {

        setReviewCard(result)
        setLoading(false)

        })
    }, [review_id]);

    return (
        <section>
            {loading ? <h2>Loading...</h2> : <h2>Here's your requested reviews:</h2>}
            <h1>Owner: {reviewCard.owner}</h1>
            <h2>Designer: {reviewCard.designer}</h2>
            <h3>Title: {reviewCard.title}</h3>
            <h3>Category: {reviewCard.category}</h3>
            <p>Comment: {reviewCard.review_body}</p>
            <img src={reviewCard.review_img_url} alt='img'/>
            <button>Votes: {reviewCard.votes}</button>
        </section>
    )
}