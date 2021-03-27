import React from "react";
import axios from "axios";
import API from "../Api";
import { Card } from "react-bootstrap";
class Product extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    API.get(`http://localhost:8080/products`).then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../images/replacer.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
