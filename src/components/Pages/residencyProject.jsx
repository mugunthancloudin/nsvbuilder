import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import SimilarProjects from "./../Elements/SimilarProjects";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";

var bnrimg = require("./../../images/banner/banner.jpg");

class ResidencyProject extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Banner
            title="Helping you and your house become better acquainted."
            pagename="NSV-Residency"
            bgimage={bnrimg}
            // className="pb-5"
          />

          {/* SECTION CONTENT START */}
          <div className="section-full p-tb80 inner-page-padding">
            <div className="container">
              <div className="project-detail-outer">
                <div className="m-b30">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="product-block">
                        <div className="row">
                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              CCTV Survelliance
                            </h4>
                          </div>
                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              Gated Community
                            </h4>
                          </div>
                          
                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              Proper Drainage System
                            </h4>
                          </div>
                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              Elegant Arch with gate
                            </h4>
                          </div>

                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              Overhead water tank
                            </h4>
                          </div>

                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              Solar street lamp
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="mt-box">
                        <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                          <img
                            src="http://i3.ytimg.com/vi/s3A7AK1K2hc/maxresdefault.jpg"
                            alt=""
                          />
                          <button
                            type="button"
                            className="play-now"
                            data-toggle="modal"
                            data-target="#myModal3"
                          >
                            <i className="icon fa fa-play" />
                            <span className="ripple" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-b0">
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <div className="project-detail-pic m-b30">
                        <div className="mt-media">
                          <img
                            src={require("./../../images/projects/portrait/elevation1.jpeg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="project-detail-pic m-b30">
                        <div className="mt-media">
                          <img
                            src={require("./../../images/projects/portrait/elevation2.jpeg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="project-detail-pic m-b30">
                        <div className="mt-media">
                          <img
                            src={require("./../../images/projects/portrait/elevation3.jpeg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-detail-containt">
                  <div className="bg-white text-black">
                    <h3 className="font-weight-600">
                      Creating a sustainable future through building
                      preservation, green architecture, and smart design
                    </h3>
                    <p>
                      {" "}
                      Designers think everything done by someone else is awful,
                      and that they could do it better themselves, which
                      explains why I designed my own living room carpet, I
                      suppose. the architect represents neither a Dionysian nor
                      an Apollinian condition: here it is the mighty act of
                      will, the will which moves mountains, the intoxication of
                      the strong will, which demands artistic expression. The
                      most powerful men have always inspired the architects; the
                      architect has always been influenced by power.
                    </p>
                    <p>
                      NSV Residency, an exclusive self-contained gated community
                      of Villas in North Coimbatore. It is a set of around 45
                      Independent 2-3 BHK Villas spread over a vast 2.26acres
                      located near Karamadai. The Villa, boasting of high
                      Construction standard and excellent finish, offers you
                      maximum Sense of space. NSV Residency which means ‘a Gift
                      of Nature’ offers you a lifestyle of comfort, convenience,
                      and sophistication in a calm and secure environment. Run
                      away to a haven of refined living at NSV Residency, an
                      exclusive lifestyle, and comfortable residential enclave
                      snuggled in the serene location of the city.
                    </p>
                    <div className="m-b0">
                      <div className="mt-divider divider-1px  bg-black">
                        <i className="icon-dot c-square" />
                      </div>
                    </div>
                    <ul className="social-icons social-square social-darkest m-b0">
                      <li>
                        <NavLink to={"#"} className="fa fa-facebook" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-twitter" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-linkedin" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-rss" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-youtube" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-instagram" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT END  */}
          <SimilarProjects />
        </div>

        <div className="modal fade" id="myModal3" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <ReactPlayer url="https://www.youtube.com/watch?v=s3A7AK1K2hc" />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default ResidencyProject;
