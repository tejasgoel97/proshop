import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import { detailProduct } from "../actions/productAction";
import RedAlert from "../components/redAlert";
import { addToCart } from "../actions/cartAction";

const ProductDetail = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  console.log("THE QUANTITY IS ", qty);

  const productDetail = useSelector((state) => state.productDetail);
  const { product, error, loading } = productDetail;
  const id = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(detailProduct(id));
    };
    fetchProduct();
  }, [match, dispatch]);

  const addToCartHandler = () => {
    // dispatch(addToCart(id, qty));
    history.push(`/cart/${id}?qty=${qty}`);
  };

  if (loading) {
    return <Spinner animation="border" />;
  }
  if (error) {
    return (
      <>
        <RedAlert />
        <Button onClick={() => dispatch(detailProduct(id))} variant="primary">
          Try Again
        </Button>
      </>
    );
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description:{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            {product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Quantity</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={(e) => setQty(e.target.value)}
                      custom
                    >
                      {[...Array(product.countInStock).keys()].map((x) => {
                        return <option value={x + 1}>{x + 1}</option>;
                      })}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <Row>
                <Col>
                  <Button
                    className="btn-block"
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
