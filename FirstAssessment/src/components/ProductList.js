import React, { Component } from "react";
import Product from "./Product";
import "./Product.css";
import { products } from "./Constant";
export class ProductList extends Component {
  render() {
    return (
      <div>
        {products.map((element) => {
          return (
            <Product
              title={element.title}
              url={element.url}
              description={element.description}
            />
          );
        })}
      </div>
    );
  }
}
export default ProductList;
