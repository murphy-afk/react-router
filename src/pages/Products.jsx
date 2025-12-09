import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => 
    getProducts()
  , [])

  function getProducts() {
    axios .get('https://fakestoreapi.com/products')
    .then((resp) => {
      const prodData = resp.data;
      setProducts(prodData);
      console.log(prodData);
      
    })
  }
  return(
    <>
    <Header />
    <h1>Products</h1>
    {}
    </>
  )
}