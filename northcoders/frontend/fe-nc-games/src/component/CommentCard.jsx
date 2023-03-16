import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCommentsByReviewId } from '../utils/api';

export const CommentCards = () => {
    const { review_id } = useParams();

    const [commentCard, setCommentCard] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
        setLoading(true)
        getCommentsByReviewId(review_id)

        .then((result) => {
          
            setCommentCard(result)
            setLoading(false)

        })
    }, []);

    return (
        <section>
            {loading ? <h2>Loading...</h2> : <h2>Here are the comment</h2>}
            <h1>Owner: {commentCard.author}</h1>
            <p>{commentCard.body}</p>
            <h3>Created-At: {commentCard.created_at}</h3>
            <button>Votes: {commentCard.votes}</button>
        </section>
    )
}