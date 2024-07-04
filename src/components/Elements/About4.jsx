import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const images = [
  require("./../../images/gallery/portrait/about1.jpg"),
  require("./../../images/gallery/portrait/about2.jpg"),
  require("./../../images/gallery/portrait/about3.jpg"),
  require("./../../images/gallery/portrait/about4.jpg"),
];

var bnr1 = require("./../../images/background/line.png");

class About4 extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/masonary.js");
  }

  render() {
    const options = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      items: 1,
      dots: true,
    };

    const handleClick = () => {
      window.open = "https://wa.me/9894817125"; // Redirects to a specific WhatsApp chat
    };

    return (
      <>
        <div className="section-full p-t80 p-b80 bg-white inner-page-padding">
          <div className="container">
            <div className="section-content ">
              <div className="row">
                <div className="col-lg-5 col-md-5 ">
                  <div className="m-about ">
                    <OwlCarousel
                      className="owl-carousel about-us-carousel"
                      {...options}
                    >
                      {images.map((item, index) => (
                        <div className="item" key={index}>
                          <div className="ow-img">
                            <NavLink to="/about">
                              <img src={item} alt="" />
                            </NavLink>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="m-about-containt text-black p-t80">
                    <div
                      className="m-about-years bg-moving"
                      style={{ backgroundImage: "url(" + bnr1 + ")" }}
                    >
                      <span className="text-primary large-title">25</span>
                      <span className="large-title-info">
                        Years of Experience
                      </span>
                    </div>
                    <h3 className="font-weight-600">
                      Improving quality of life with an integrated unified
                      approach.
                    </h3>
                    <p>
                      It is our goal to ensure your complete satisfaction
                      throughout the building period and long after. We offer
                      innovative floor plans with a variety of flexible options
                      to meet your changing lifestyle needs.
                    </p>
                    <div
                      className="site-button btn-effect  p-t20"
                      onClick={handleClick}
                    >
                      <span>Get in touch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About4;
