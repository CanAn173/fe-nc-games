import axios from 'axios'
import { useEffect, useState } from 'react'
import { getReviews } from '../utils/api'
import {ReviewCard} from './ReviewCard'

export const ReviewList = () => {

    
    const reviewsButton = axios.create({
        baseURL : 'https://my-nc-game-project.onrender.com/api'
    })

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      reviewsButton.get('/reviews')
      .then((result) => {
        setLoading(false);
        console.log(result)
        setReviews(result.data.review)
      })
    }, [])

    console.log(reviews)    

    return (
        <section>
            <ul>{reviews.map((review) => {
              return (
              <div className='reviewlist'>
                {loading ? <p>Loading</p> : <button>More Info</button>}
                <h1 key={review.review_id}>{review.owner}</h1>
                <p>{review.review_body}</p>
                {/* <ReviewCard></ReviewCard> */}
              </div>
              )
            })}</ul>
        </section>
    )
}