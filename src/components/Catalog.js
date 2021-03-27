import React from "react";
import axios from "axios";
import API from "../Api";
import { Card, Button, ButtonGroup } from "react-bootstrap";

class Catalog extends React.Component {
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
      <ul>
        {this.state.products.map((product) => (
          <>
            <Card key={product.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={require("../images/replacer.jpg")} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <ButtonGroup className="mr-2">
                  <Button variant="primary">See more...</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button variant="primary">Add to cart</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </>
        ))}
      </ul>
    );
  }
}

export default Catalog;
