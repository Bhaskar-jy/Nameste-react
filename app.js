import React from "react";
import ReactDOM from "react-dom/client";

/*
 *Header
 * - Logo
 * - Nev Bar
 *Body
 * - Search
 * - Restorant Container
 *    - Restorant Cards
 *        - image
 *        - name of res, star rating, cusine, dilivery time
 *Footer
 * - Copyright
 * - Address
 * https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108
 * - COntacts
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"
        />
      </div>
      <div className="nev-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>COntact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestorantCard = (props) => {
  return (
    <div className="res-card">
      <img alt="cardimg" className="res-log" src={props.imgSrc} />
      <h3>{props.resName}</h3>
      <h4>{props.cusine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.delivertTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchbar">search</div>
      <div className="res-container">
        <RestorantCard
          resName="Meghna Food"
          cusine="Biryni, North indian, Asyan"
          rating="4.4 stars"
          delivertTime="38 minuts"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108"
        />
        <RestorantCard
          resName="Kosu Guti Restaurant"
          cusine="Assamese, Chinese, Asyan"
          rating="3.4 stars"
          delivertTime="32 minuts"
          imgSrc="https://b.zmtcdn.com/data/pictures/5/20267755/b85479f7df039a8daa8f28000c011507_o2_featured_v2.jpg?output-format=webp"
        />
        <RestorantCard
          resName="Biryani Bite"
          cusine="Biryani, North Indian, Rolls"
          rating="4.1 stars"
          delivertTime="42 minuts"
          imgSrc="https://b.zmtcdn.com/data/pictures/7/19639867/01c361be49104bfce556f3360879c13a_o2_featured_v2.jpg"
        />
        <RestorantCard
          resName="Barbie Fast Food"
          cusine="North Indian, Mughlai, Chinese"
          rating="3.3 stars"
          delivertTime="28 minuts"
          imgSrc="https://b.zmtcdn.com/data/pictures/4/20380034/37c19343d143a84cbe23a6a3a3cbfc53_o2_featured_v2.jpg"
        />
        <RestorantCard
          resName="Pack'ed Meals"
          cusine="North Indian, Chinese, Rolls"
          rating="3.1 stars"
          delivertTime="30 minuts"
          imgSrc="https://b.zmtcdn.com/data/pictures/7/20661407/24571c4267b99313f9f9982a921218ea_o2_featured_v2.jpg"
        />
        <RestorantCard
          resName="Local Food Kitchen"
          cusine="Assamese,North Indian, Fast Food"
          rating="3.9 stars"
          delivertTime="48 minuts"
          imgSrc="https://b.zmtcdn.com/data/pictures/6/20802726/324621137c042dcb68e1ee4ada00515f_o2_featured_v2.jpg"
        />
        <RestorantCard
          resName="Kitchen Queen"
          cusine="Assamese, Chinese, Fast Food"
          rating="4.8 stars"
          delivertTime="35 minuts"
          imgSrc="https://b.zmtcdn.com/data/pictures/4/21237774/1a476166954a0ee4fcd85077fd8854be_o2_featured_v2.jpg"
        />
        <RestorantCard
          resName="Flavours Of Northeast"
          cusine=" North East, Local, Asyan"
          rating="4.2 stars"
          delivertTime="25 minuts"
          imgSrc="https://b.zmtcdn.com/data/pictures/3/19879843/e4b74a4cb2262cff45b06f5f0c7a54ac_o2_featured_v2.jpg"
        />
        <RestorantCard
          resName="The Dessert Zone"
          cusine="Desserts, Shake, Ice Cream"
          rating="4.5 stars"
          delivertTime="36 minuts"
          imgSrc="https://b.zmtcdn.com/data/pictures/chains/6/20275366/104fc551e0ba5090dd955eec315a48d3_o2_featured_v2.jpg"
        />
      </div>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
