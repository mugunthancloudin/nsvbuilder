import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "../Elements/Switcher";

var bgimage = require("./../../images/background/bg-site.png");

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.currentstate = { logo: require("./../../images/logo.png") };
  }

  updateFooterLogo = (updatedlogo) => {
    this.currentstate.logo = updatedlogo;
  };

  render() {
    return (
      <>
        <footer className="site-footer footer-large  footer-dark	footer-wide">
          <div
            className="container call-to-action-wrap bg-no-repeat bg-center"
            style={{ backgroundImage: "url(" + bgimage + ")" }}
          >
            <div className="p-a30 bg-primary ">
              <div className="row">
                <div className="col-md-8 col-sm-8">
                  <div className="call-to-action-left text-black">
                    <h4 className="text-uppercase m-b10 m-t0">
                      Subscribe to our newsletter!
                    </h4>
                    <span>
                      Never Miss Anything From Construx By Signing Up To Our
                      Newsletter.
                    </span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="call-to-action-right">
                    <div className="widget_newsletter">
                      <div className="newsletter-bx">
                        <form role="search" action="./">
                          <div className="input-group">
                            <input
                              name="news-letter"
                              className="form-control"
                              placeholder="ENTER YOUR EMAIL"
                              type="text"
                            />
                            <span className="input-group-btn">
                              <button type="submit" className="site-button">
                                <i className="fa fa-paper-plane-o" />
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FOOTER BLOCKES START */}
          <div className="footer-top overlay-wraper">
            <div className="overlay-main" />
            <div className="container">
              <div className="row">
                {/* ABOUT COMPANY */}
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="widget widget_about">
                    {/*<h4 class="widget-title">About Company</h4>*/}
                    <div className="logo-footer clearfix p-b15">
                      <NavLink to={"./"}>
                        <img
                          src={this.currentstate.logo}
                          alt="headerLogo"
                          className="headerLogo"
                        />
                      </NavLink>
                    </div>
                    <p className="max-w400">
                      NSV Property Developers is recognized as a leading
                      property developer in the industry.
                    </p>
                    <ul className="social-icons  mt-social-links">
                      <li>
                        <NavLink to={"#"} className="fa fa-google" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-rss" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-facebook" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-twitter" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-linkedin" />
                      </li>
                    </ul>

                    
                  </div>

                  <button className="footerbtn">
                      <a className="footerbtn">Download Brochure</a>
                    </button>
                </div>
                {/* RESENT POST */}
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="widget widget_address_outer">
                    <h4 className="widget-title">Contact Us</h4>
                    <ul className="widget_address">
                      <li>
                        NSV Property Developers 49/10, Kappal Complex, Teachers
                        Colony, Mettupalayam Road Karamadai - 641 104.
                        Comibatore Dist, Tamil Nadu, INDIA.
                      </li>
                      <li>nsvproperties1@gmail.com</li>
                      <li>+91 98948 17125</li>
                    </ul>
                  </div>
                </div>
                {/* USEFUL LINKS */}
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-3">
                  <div className="widget widget_services inline-links">
                    <h4 className="widget-title">Useful links</h4>
                    <ul>
                      <li>
                        <NavLink to={"/about"}>About</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/project"}>Projects</NavLink>
                      </li>
                      <li>
                        <NavLink to={""}>Blog</NavLink>
                      </li>
                      <li>
                        <NavLink to={""}>Contact Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* TAGS */}
                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget recent-posts-entry-date">
                    <h4 className="widget-title">Resent Post</h4>
                    <div className="widget-post-bx">
                      <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                        <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                          <strong className="p-date">24</strong>
                          <span className="p-month">Mar</span>
                          <span className="p-year">2024</span>
                        </div>
                        <div className="mt-post-info">
                          <div className="mt-post-header">
                            <h6 className="post-title">
                              <NavLink to={"/post-sidebar"}>
                                On these beams, we’re building dreams.
                              </NavLink>
                            </h6>
                          </div>
                          <div className="mt-post-meta">
                            <ul>
                              <li className="post-author">
                                <i className="fa fa-user" />
                                By Admin
                              </li>
                              <li className="post-comment">
                                <i className="fa fa-comments" /> 28
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                        <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                          <strong className="p-date">30</strong>
                          <span className="p-month">Jan</span>
                          <span className="p-year">2024</span>
                        </div>
                        <div className="mt-post-info">
                          <div className="mt-post-header">
                            <h6 className="post-title">
                              <NavLink to={"/post-sidebar"}>
                                We’ll be a sensation for you next renovation
                              </NavLink>
                            </h6>
                          </div>
                          <div className="mt-post-meta">
                            <ul>
                              <li className="post-author">
                                <i className="fa fa-user" />
                                By Admin
                              </li>
                              <li className="post-comment">
                                <i className="fa fa-comments" /> 29
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* NEWSLETTER */}
              </div>
            </div>
          </div>
          {/* FOOTER COPYRIGHT */}
          <div className="footer-bottom overlay-wraper">
            <div className="overlay-main" />
            <div className="container">
              <div className="row">
                <div className="mt-footer-bot-center">
                  <span className="copyrights-text">
                    Copyright © 2024 All rights reserved. Designed By
                    CloudInLabs.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)} />
      </>
    );
  }
}

export default Footer;
