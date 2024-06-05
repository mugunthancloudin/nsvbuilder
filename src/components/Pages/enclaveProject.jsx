import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import SimilarProjects from "./../Elements/SimilarProjects";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";
import OurFaceing from "../Elements/ourFaceing";
import enclaveBanner from "../../images/projects/portrait/nsvEnclaveBanner.png";
import enclave_ebrochure from "../../assets/documents/enclave_ebrochure.pdf"


var bnrimg = require("./../../images/banner/banner.jpg");

class EnclaveProject extends React.Component {
  render() {

    const handleDownload = () => {
      // Create a hidden anchor element
      const link = document.createElement("a");
      link.href = enclave_ebrochure;
      link.download = "enclave_ebrochure.pdf";
      document.body.appendChild(link);
      link.click();
      // Check if the link exists before removing it
      if (link.parentNode) {
        document.body.removeChild(link);
      }
    };

    return (
      <>
        <Header />
        <div className="page-content">
          <Banner
            title="Helping you and your house become better acquainted."
            pagename="NSV-Enclave"
            bgimage={bnrimg}
          />

          {/* SECTION CONTENT START */}
          <div className="section-full p-t80">
            <div className="container">
              <div className="project-detail-outer">
                <div className="m-b0">
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <div className="project-detail-pic m-b30">
                        <div className="mt-media">
                          <img
                            src={require("./../../images/projects/portrait/enclave01.jpeg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="project-detail-pic m-b30">
                        <div className="mt-media">
                          <img
                            src={require("./../../images/projects/portrait/enclave02.jpeg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="project-detail-pic m-b30">
                        <div className="mt-media">
                          <img
                            src={require("./../../images/projects/portrait/enclave03.jpeg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <div className="col-lg-8">
                      <div className="row w-100">
                        <img src={enclaveBanner} alt="enclaveBanner"/>
                        <p className="pt-5">
                          NSV Property Developers Pvt. Ltd., is a leading
                          property developer specializing in residential as well
                          as plotted development across in North Coimbatore.
                          Successful projects in Coimbatore speak volumes about
                          the quality and glory of the company.
                        </p>
                        <div className="appint-btn" onClick={handleDownload}>
                      <a className="site-button">Download Browture</a>
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
                      NSV Enclave is a set of around 40 Independent 2-3 BHK
                      residences spread over a vast 2.5 acre area which is
                      located in between Karamadai and Mettupalayam (Teacher's
                      Colony - Gandhi Nagar), an environment that spells
                      serenity. The villas, boasting of high construction
                      standards and excellent finish, offer you maximum sense of
                      space.{" "}
                    </p>

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
                    {/* <div className="m-b0">
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
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* faceing */}
          <OurFaceing />
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

export default EnclaveProject;
