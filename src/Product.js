import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Product({id,title,image,price,rating}) {
  const [{ basket }, dispatch] = useStateValue();
  
  // console.log("this is the basket>>")

  const addtoBasket=()=>{
     dispatch({
      type:'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
     });
  };

  // const btn = document.getElementById('btn');

// btn.addEventListener('click', function onClick() {
//   btn.style.backgroundColor = 'salmon';
//   btn.style.color = 'white';
// });
  
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>
            ))}
          
        </div>
      </div>
      <img src={image}alt=""  />
      <Link to ='/checkout'>
      <button className="btn" onClick={addtoBasket}>Add to cart</button>
      </Link>
      {/* onClick={addtoBasket} */}
    </div>
  );
}

export default Product;
