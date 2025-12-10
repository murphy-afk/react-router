import { useNavigate } from "react-router-dom"

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="container text-center bg-semitransparent text-warning py-5">
      <h1>ERROR 404 Page not found</h1>
      <span>sorry... you seem to be on the wrong page click the button to go back to the home page</span>
      <span><button className='btn btn-danger ms-1' onClick={() => navigate('/')}>Go back</button></span>
      <p className="text-light">or you can stay and look at the cat...</p>
      <img className="cat-gif rounded" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWZmb2MwZGxiYzg0OWtuNDhhNzM4amJvenU0aWQzbzFzd3R0azh5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gXXFrjHFJIMoqKr8UT/giphy.gif" alt="catgif" />
    </div>
  )
}