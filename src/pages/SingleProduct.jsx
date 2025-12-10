import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import Header from "../components/Header";
import { reviews } from '../assets/reviews'

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        setProduct(resp.data)
      })
      .catch((err) => {
        console.log(err);
        alert("Product doesn't exist");
        navigate("/products");
      })
  }, [id])

  return (
    <>
      {product !== null &&
        <div>
          {/* <button onClick={() => navigate('/products')}>test</button> */}
          <h1 className="text-center pt-0 pb-2 bg-secondary w-100">Product details</h1>
          <div className="container p-2 rounded card-details text-light">
            <div className="row">
              <div className="col-6">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="col-6">
                <h2>{product.title}</h2>
                <p className="badge">{product.category}</p>
                <p>{product.description}</p>
                <p className="bg-dark rounded text-center">{product.price}&euro;</p>
                {product.rating && (
                  <div>
                    <p>Average rating: {product.rating.rate}&#9734;</p>
                    <p>Based on {product.rating.count} reviews</p>
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="border-bottom py-3">Reviews</h2>
                {reviews.map((review) => (
                  <div className="border-bottom" key={review.id}>
                    <h3>{review.name}</h3><span><p className="fw-light">{review.date}</p></span>
                    <p>{review.content}</p>
                    <p>{review.rating}</p>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}