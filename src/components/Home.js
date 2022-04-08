import React from "react";
import "../styles/home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-4 product_row">
            <Product
              id={1}
              title="The Learn Startup: Lorem Ipsum 1"
              price={10}
              rating={5}
              image="https://www.xda-developers.com/files/2020/05/XPS-17-1024x1024.png"
            />
          </div>
          <div className="col-md-4 product_row">
            <Product
              id={2}
              title="The Learn Startup: Lorem Ipsum 2"
              price={15}
              rating={4}
              image="https://cms.qz.com/wp-content/uploads/2019/08/Samsung-Galaxy-Note10-Plus-review.jpg?quality=75&strip=all&w=1200&h=900&crop=1"
            />
          </div>
          <div className="col-md-4 product_row">
            <Product
              id={3}
              title="The Learn Startup: Lorem Ipsum 3"
              price={20}
              rating={4}
              image="https://www.imaging-resource.com/PRODS/nikon-p1000/Z-NIKON-P1000-FRONTLEFT-ZOOM.JPG"
            />
          </div>
          <div className="col-md-4 product_row">
            <Product
              id={4}
              title="The Learn Startup: Lorem Ipsum 4"
              price={25}
              rating={5}
              image="https://i.gadgets360cdn.com/large/Samsung_Galaxy_S20_ultra_cover_1585735378271.jpg"
            />
          </div>
          <div className="col-md-4 product_row">
            <Product
              id={5}
              title="The Learn Startup: Lorem Ipsum 5"
              price={30}
              rating={5}
              image="https://content.abt.com/image.php/big-MVVJ2LLA.jpg?image=/images/products/BDP_Images/big-MVVJ2LLA.jpg&canvas=1&quality=80&min_w=600&min_h=400"
            />
          </div>
          <div className="col-md-4 product_row">
            <Product
              id={6}
              title="The Learn Startup: Lorem Ipsum 6"
              price={35}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
