import axios from 'axios';

const reviewsUrl = axios.create({
    baseURL: 'https://my-nc-game-project.onrender.com/api',
})

export const getReviews = () => {
    let path = '/reviews'

    return reviewsUrl
    .get(path)
    .then((res) => {
      return res.data.review
    })
  }

export const getReviewsById = (review_id) => {
  let path = `/reviews/${review_id}`

  return reviewsUrl
  .get(path)
  .then((res) => {
    return res.data.customerReviews
  })
}

export const getCommentsByReviewId = (review_id) => {
  let path = `/reviews/${review_id}/comments`
  
  return reviewsUrl
  .get(path)
  .then((res) => {
    console.log(res)
    return res.data.commentsById
  })
}

export const patchReviewVotes = (review_id, votes) => {
  let path = `/reviews/${review_id}`

  return reviewsUrl
  .patch(path, {inc_votes: votes})
  .then((res) => {
    return res.data.customerReviews
  })
}