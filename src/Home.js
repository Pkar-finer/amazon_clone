// rfce this is shortcut key for jo niche intially ata hai
import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Shamshera/3000x1200_Hero-Tall_NP._CB630120097_.jpg"
        />
        <div className="home_row">
          <Product
            id="789456123"
            title="Samsung 253 L 3 Star with Inverter Double Door Refrigerator (RT28A3453S8/HL, Elegant Inox)"
            price={44444}
            image="https://m.media-amazon.com/images/I/61r7yN0Nk5L._SY741_.jpg"
            rating={5}
          />
          <Product
            id="789456128"
            title="Samsung 23 L Solo Microwave Oven (MS23A301TAK/TL, Black, Auto Cook)"
            price={6644}
            image="https://m.media-amazon.com/images/I/710GdqOStIL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="456123"
            title="Samsung 6.5 Kg 5 Star Inverter Fully-Automatic Top Loading Washing Machine (WA65T4262GG/TL, Light Grey, Wobble technology)"
            price={37777}
            image="https://m.media-amazon.com/images/I/61YXeABU+RL._AC_UL480_QL65_.jpg"
            rating={4}
          />

          {/* product */}
        </div>
        <div className="home_row">
          {/* product */}
          {/* product */}
          {/* product */}
          <Product
            id="45612389"
            title="LG 1 Ton 5 Star AI DUAL Inverter Split AC "
            price={57777}
            image="https://images-eu.ssl-images-amazon.com/images/I/21ywp-zfTjL._SY445_SX342_QL70_FMwebp_.jpg"
            rating={4}
          />
          <Product
            id="45612386"
            title="LG 1 Ton 5 Star AI DUAL Inverter Split AC"
            price={57777}
            image="https://images-eu.ssl-images-amazon.com/images/I/21ywp-zfTjL._SY445_SX342_QL70_FMwebp_.jpg"
            rating={4}
          />
          <Product
            id="45612383"
            title="LG 1 Ton 5 Star AI DUAL Inverter Split AC "
            price={57777}
            image="https://images-eu.ssl-images-amazon.com/images/I/21ywp-zfTjL._SY445_SX342_QL70_FMwebp_.jpg"
            rating={4}
          />
          {/* <Product />
          <Product /> */}
        </div>
        <div className="home_row">
          {/* product */}
          <Product
            id="7894561234"
            title="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, ENx™ Tech, Smooth Touch Controls(Bold Black)"
            price={4444}
            image="https://m.media-amazon.com/images/I/51HBom8xz7L._SY355_.jpg"
            rating={5}
          />
          <Product
            id="4561235"
            title="HP 14(2021) 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 1.49 Kg (14s-er0503TU)"
            price={53444}
            image="https://m.media-amazon.com/images/I/61HIqJZKPkS._SX679_.jpg
            "
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
