import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCommentsByReviewId } from '../utils/api';

export const CommentCards = () => {

    const { review_id } = useParams();

    const [commentCard, setCommentCard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
        setLoading(true)
        getCommentsByReviewId(review_id)

        .then((result) => {
          
            setCommentCard(result)
            setLoading(false)

        })
    }, [review_id]);
    
    if (loading) return <h2>Loading...</h2>

    return (
        <section>
            <h2>Here are the comment</h2>
            {commentCard.map((comment) => {
              return (
                <div key={comment.comment_id}>
                    <h1>Owner: {comment.author}</h1>
                    <p>{comment.body}</p>
                    <h3>Created-At: {comment.created_at}</h3>
                    <button>Votes: {comment.votes}</button>
                </div>
              )
            })}
        </section>
    )
}