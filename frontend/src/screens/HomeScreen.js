import axios from "axios";
import { Row, Col, Spinner, Card, Button } from "react-bootstrap";
import { Link } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import { listProducts } from "../actions/productAction";
import RedAlert from "../components/redAlert";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  console.log(productList);
  let { products, loading, error } = productList;
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(listProducts());
    };
    fetchProducts();
  }, [dispatch]);
  if (loading) {
    return <Spinner animation="border" />;
  }
  if (error) {
    return (
      <>
        <RedAlert />
        <Button onClick={() => dispatch(listProducts())} variant="primary">
          Try Again
        </Button>
      </>
    );
  }
  return (
    <>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
