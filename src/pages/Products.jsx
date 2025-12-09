import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() =>
    getProducts()
    , [])

  function getProducts() {
    axios.get('https://fakestoreapi.com/products')
      .then((resp) => {
        const prodData = resp.data;
        setProducts(prodData);
        console.log(prodData);

      })
  }
  return (
    <>
      <Header />
      <h1>Products</h1>
      <div className="container">
        <div className="row row-cols-3">
          {products.map(product => (
            <div className="card" key={product.id}>
              <div className="card-img-top">
                <img src={product.image} alt="" />
                <div className="card-body">
                  <div className="card-title">{product.title}</div>
                  <div className="card-text">{product.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}