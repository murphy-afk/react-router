export default function Card({product}) {
  const {title, description, image} = product;
  return (
    <div className="card bg-secondary col col-3 mx-1">
              <div className="card-img-top">
                <img src={image} alt="" />
                <div className="card-body">
                  <div className="title-container">
                  <h3 className="card-title fs-4">{title}</h3>
                  </div>
                  <p className="card-text fw-light">{description}</p>
                </div>
              </div>
            </div>
  )
}