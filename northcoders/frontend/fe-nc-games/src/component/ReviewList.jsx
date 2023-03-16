import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getReviews } from '../utils/api'
// import {ReviewCard} from './ReviewCard'

export const ReviewList = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getReviews()
      .then((result) => {
        setLoading(false);
        setReviews(result)
      })
    }, [])

    return (
        <section>
            <ul>{reviews.map((review) => {
              return (
              <div className='reviewlist'>
                <Link to={`/reviews/${review.review_id}`}>
                <button>More Info</button>
                </Link>
                <h1 key={review.review_id}>{review.owner}</h1>
                <p>{review.review_body}</p>
                <img src={review.review_img_url} alt='img'/>
              </div>
              )
            })}</ul>
        </section>
    )
}