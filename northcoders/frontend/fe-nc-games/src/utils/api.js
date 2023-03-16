import axios from 'axios';

const reviewsUrl = axios.create({
    baseURL: 'https://my-nc-game-project.onrender.com/api',
})

export const getReviews = (review_id) => {
    let path = '/reviews'

    return reviewsUrl
    .get({path})
    .then((data) => {
      return data.reviews
    })
}