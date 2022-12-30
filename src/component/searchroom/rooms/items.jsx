
import "./items.scss"
import React from "react";

const Item = ({URL, title, price }) => (
  <div className="box ">
            <figure className="col-12">
                <img className="col-12" src={URL}  />
                <figcaption className="col-12 text-center">{title}</figcaption>
                <h5 className="col-3 price" >{price}
                تومان
                </h5>
            </figure>

  </div>
);


export default Item;



