import Rating from "./Rating";
import { Link } from "react-router-dom";
const { Card } = require("react-bootstrap");

const Product = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text as="div">
          <Rating value={product.rating} />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
