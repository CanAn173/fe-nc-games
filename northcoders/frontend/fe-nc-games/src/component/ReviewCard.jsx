
const ReviewCard = ({ reviews }) => {
    return (
        <section>
            <h1>{reviews.owner}</h1>
            <h2>{reviews.designer}</h2>
            <h2>{reviews.title}</h2>
            <h2>{reviews.category}</h2>
            <p>{reviews.body}</p>
            {reviews.votes}
        </section>
    )
}