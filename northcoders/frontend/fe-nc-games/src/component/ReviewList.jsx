import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getReviews } from '../utils/api'

export const ReviewList = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      setLoading(true)
      getReviews()
      .then((result) => {
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
                <Link to={`/reviews/${review.review_id}/comments`}>
                  <button>Comment Section</button>
                </Link>
              </div>
              )
            })}</ul>
        </section>
    )
}