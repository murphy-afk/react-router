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
      <Header />
      <div className="container pt-3 w-100 p-0">
        <div className="row justify-content-center row-gap-2">
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