export default function Review({review}) {
  return (
    <div className="border-bottom" key={review.id}>
      <h3>{review.name}</h3><span><p className="fw-light">{review.date}</p></span>
      <p>{review.content}</p>
      <p>{review.rating}</p>
    </div>
  )
}