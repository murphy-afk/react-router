import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from 'axios'
import Header from "../components/Header";

export default function SingleProduct() {
  const {id} = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios .get(`https://fakestoreapi.com/products/${id}`)
    .then((resp) => {
      setProduct(resp.data)
    })
  }, [id])

  return(
    <>
    <Header />
    <h1 className="text-light text-center">Product detais</h1>
    <div className="container">
    <Card product={product}/>
    </div>
    </>
  )
}