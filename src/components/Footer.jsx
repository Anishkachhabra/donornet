import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      {/* Footer Area */}
      <footer id="footer" className="footer ">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>About Us</h2>
                  <p>DonorNet is a NGO which works for the beterment of the people throughout the World. People can get blood according to their circumstances within their location preference.</p>
                  {/* Social */}
                  <ul className="social">
                    <li><a href="#"><i className="bi bi-facebook" /></a></li>
                    <li><a href="#"><i className="bi bi-google" /></a></li>
                    <li><a href="#"><i className="bi bi-twitter" /></a></li>
                    <li><a href="#"><i className="bi bi-vimeo" /></a></li>
                    <li><a href="#"><i className="bi bi-pinterest" /></a></li>
                  </ul>
                  {/* End Social */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Quick Links</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li><a href="#"><i className="bi bi-caret-right" aria-hidden="true" />Home</a>
                        </li>
                        <li><a href="#"><i className="bi bi-caret-right" aria-hidden="true" />About Us</a>
                        </li>
                        <li><a href="#"><i className="bi bi-caret-right" aria-hidden="true" />Services</a>
                        </li>
                        
                        <li><a href="#"><i className="bi bi-caret-right" aria-hidden="true" />Other
                          Links</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li><a href="#"><i className="bi bi-caret-right" aria-hidden="true" />Consuling</a></li>
                        <li><a href="#"><i className="bi bi-caret-right" aria-hidden="true" />Finance</a>
                        </li>
                        <li><a href="#"><i className="bi bi-caret-right" aria-hidden="true" />Testimonials</a></li>
                        <li><a href="#"><i className="bi bi-caret-right" aria-hidden="true" />FAQ</a></li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Open Hours</h2>
                  <p>Our website operates 24/7 throughout the world without interrupts.</p>
                  <ul className="time-sidual">
                  <h5 style={{textAlign: "left", paddingLeft: 70}}>Office Hours</h5>
                    <li className="day">Monday - Friday<span>8.00-20.00</span></li>
                    <li className="day">Saturday <span>9.00-18.30</span></li>
                    <li className="day">Sunday <span>9.00-15.00</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Newsletter</h2>
                  <p>Subscribe to our newsletter to get allour news in your inbox.</p>
                  <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                    <input name="email" placeholder="Email Address" className="common-input" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" required type="email" />
                    <button className="button"><i className="bi bi-send" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Footer Top */}
        {/* Copyright */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>© Copyright 2023 | All Rights Reserved by <a href="#" target="_blank">DonorNet.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Copyright */}
      </footer>
      {/*/ End Footer Area */}
    </footer>
  );
};

export default Footer;
