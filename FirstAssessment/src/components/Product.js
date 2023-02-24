import React, { Component } from "react";
export class Product extends Component {
  render() {
    let { title, url, description } = this.props;
    return (
      <div>
        <div className="main-div">
          <div className="product_list" key={title}>
            <label className="title"> {title} </label>
            <br />
            <br />
            <img src={url} alt="Product" height="100px" width="100px"></img>
            <br />
            <label className="description"> {description} </label>
            <br />
            <br />
            <button>Like</button>
            <button>Share</button>
            <button>Purchase</button>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
