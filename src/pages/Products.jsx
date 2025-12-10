import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Card from "../components/Card";


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
      })
  }
  return (
    <>
   
      <div className="container pt-3 w-100 p-0">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          {products.map(product => (
            <Card product={product}
            key={product.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}