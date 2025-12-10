import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function SingleProduct() {
  const {id} = useParams();

  return(
    <h1>product page</h1>
    // <Card />
  )
}