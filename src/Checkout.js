import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG_22/Varun/BAU_Ref_LA/Exciting_New_launches/Heading_1500X150.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h3>Namaste,{!user ? "Guest" : user.email.substring(0,5)}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
