import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import Header from "../components/Header";

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
        alert("Products doesn't exist");
        navigate("/products");
      })
  }, [id])

  return (
    <>
    {product !== null && 
    <div>

      <Header />
      <h1 className="text-center pt-0 pb-2 bg-secondary w-100">Product details</h1>
      <div className="container p-2 rounded card-details text-light">
        <div className="row">
          <div className="col-6">
            <img src={product.image} alt="" />
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
        <div className="col-12">
          <h2 className="border-bottom py-3">Reviews</h2>
          <div className="border-bottom">
            <h3>Review 1</h3><span><p className="fw-light">20-11-2022</p></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur saepe ut ipsa sequi eveniet at a, deserunt error. Quam temporibus numquam dolore dolorem minima reprehenderit ducimus quibusdam, quas laborum.</p>
            <p>Rating: 3,5</p>
          </div>
          <div className="border-bottom">
            <h3>Review 2</h3><span><p className="fw-light">20-11-2022</p></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur saepe ut ipsa sequi eveniet at a, deserunt error. Quam temporibus numquam dolore dolorem minima reprehenderit ducimus quibusdam, quas laborum.</p>
            <p>Rating: 3,5</p>
          </div>
          <div className="border-bottom">
            <h3>Review 3</h3><span><p className="fw-light">20-11-2022</p></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur saepe ut ipsa sequi eveniet at a, deserunt error. Quam temporibus numquam dolore dolorem minima reprehenderit ducimus quibusdam, quas laborum.</p>
            <p>Rating: 3,5</p>
          </div>
          <div className="border-bottom">
            <h3>Review 4</h3><span><p className="fw-light">20-11-2022</p></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur saepe ut ipsa sequi eveniet at a, deserunt error. Quam temporibus numquam dolore dolorem minima reprehenderit ducimus quibusdam, quas laborum.</p>
            <p>Rating: 3,5</p>
          </div>
        </div>
      </div>
    </div>
}
    </>
  )
}