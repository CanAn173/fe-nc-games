import axios from 'axios'
import { useEffect, useState } from 'react'

export const ReviewList = () => {
    
    const reviewsButton = axios.create({
        baseURL : 'https://my-nc-game-project.onrender.com/api'
    })

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      reviewsButton.get('/reviews')
      .then((result) => {
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
                <h1 key={review.review_id}>{review.owner}</h1>
                <p>{review.review_body}</p>
              </div>
              )
            })}</ul>
        </section>
    )
}