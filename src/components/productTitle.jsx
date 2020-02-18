import React from "react";

export default function productTitle(addCount, product) {
  return (
    <div class="col-3">
      <div class="card" style={{ width: "15rem", margin: "10px" }}>
        <div class="card-body">
          <div class="row">
            <img src={product.pic} height="80px" width="80px" />
            <h5 class="card-title" style={{ marginLeft: "10px" }}>{product.title}</h5>
          </div>
          <div class="text-center" style={{ marginTop: "20px" }}>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => {
              product.clicked = !product.clicked;
              addCount(product.clicked);
            }} >
              {product.clicked ? "Remove" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}