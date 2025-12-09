export default function Card({ product }) {
  const { title, description, image } = product;
  return (
    <div className="card bg-secondary col col-3 mx-1">
      <div className="card-img-top mt-1">
        <img src={image} alt="" className="border-bottom" />
        <div className="card-body">
          <h3 className="card-title fs-5">{title}</h3>
          <p className="card-text fw-light">{description}</p>
        </div>
      </div>
    </div>
  )
}