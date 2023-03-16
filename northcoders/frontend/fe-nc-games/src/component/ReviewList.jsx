import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getReviews } from '../utils/api'


export const ReviewList = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true)
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
                {loading ? <h2>Loading...</h2> : <h2>Here are your reviews</h2>}
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