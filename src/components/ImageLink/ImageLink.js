import { NavLink } from "react-router-dom"
import "./ImageLink.scss"

const ImageLink = ({linkTo, imgSrc, imgAlt, description}) => {
  return (
    <NavLink to={linkTo} className="img-link">
      <figure>
        <img src={imgSrc} alt={imgAlt}/>
        <figcaption>{description}</figcaption>
      </figure>
    </NavLink>
  )
}

export default ImageLink