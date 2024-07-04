import React from "react";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import localVideo from "../../assets/media/video/drone1.mp4";

var img1 = require("./../../images/Banner03.jpg");

class OurValue2 extends React.Component {
  render() {
    return (
      <>
        <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-7 col-sm-6">
                  <div className="video-section-full-v2">
                    <div
                      className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30"
                      style={{ backgroundImage: "url(" + img1 + ")" }}
                    >
                      <div className="overlay-main bg-black opacity-04" />
                      <div className="video-section-inner">
                        <div className="video-section-content">
                          <div className="video-section-left">
                            <button
                              type="button"
                              className="play-now"
                              data-toggle="modal"
                              data-target="#myModal"
                            >
                              Open Modal
                              <i className="icon fa fa-play" />
                              <span className="ripple" />
                            </button>
                          </div>
                          <div className="video-section-right">
                            <NavLink
                              to={"#"}
                              className="font-weight-600 text-uppercase"
                              onClick={this.openModal}
                            ></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-6">
                  {/* TITLE START */}
                  <div className="video-part-2">
                    <h3>
                      <span className="font-weight-100">We will provide</span>{" "}
                      you the best work which you dreamt for!
                    </h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.there are many variations of passages of
                      Ipsum available,
                    </p>

                    <p>
                      NSV Property Developers Pvt. Ltd., is a leading property
                      developer specializing in residential as well as plotted
                      development across in North Coimbatore. Successful
                      projects in Coimbatore speak volumes about the quality and
                      glory of the company. We are committed to develop
                      designing, construct residential and all types of
                      building.
                    </p>
                  </div>
                  {/* TITLE END */}
                  {/* <div className="author-info author-info-v2 p-t20">
                    <div className="author-signature">
                      <img
                        src={require("./../../images/Signature+Black.png")}
                        alt="Signature"
                        width={150}
                      />
                    </div>
                    <div className="author-name">
                      <h4 className="m-t0">David Houkr</h4>
                      <p>Architect &amp; Founder</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <ReactPlayer url={localVideo} controls={true} playing={true} />
            </div>
          </div>
        </div>

        {/* <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <ReactPlayer url={localVideo} controls={true} playing={true} />
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default OurValue2;
