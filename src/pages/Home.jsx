import React, { useEffect, useRef, useState } from "react";
import "../CSS/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../images/6.png";
import img2 from "../images/7.png";
import img3 from "../images/8.png";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const slides = [
    {
        image: img1,
        heading: <>Your Health, <span className="highlight">Our Priority</span></>,
        description: "We offer top-notch medical services tailored to your needs.",
        button1: { text: "Get Appointment", link: "#appointment" },
        button2: { text: "Learn More", link: "#about-us" }
    },
    {
        image: img2,
        heading: <>Advanced <span className="highlight">Medical Solutions</span></>,
        description: "We use cutting-edge technology to improve healthcare outcomes.",
        button1: { text: "Explore Services", link: "#services" },
        button2: { text: "Contact Us", link: "#contact" }
    },
    {
        image: img3,
        heading: <>Compassionate <span className="highlight">Care</span></>,
        description: "Our experienced professionals are here to support you.",
        button1: { text: "Find a Doctor", link: "#doctors" },
        button2: { text: "Book Now", link: "#book" }
    }
];

const Home = () => {
    const loaderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (loaderRef.current) {
            loaderRef.current.classList.add("preloader-deactivate");
        }
        return () => {
            if (loaderRef.current) {
                loaderRef.current.classList.remove("preloader-deactivate");
            }
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 10000); // Change slide every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div >
            <div className="preloader" ref={loaderRef}>
                <div className="loader">
                    <div className="loader-outter"></div>
                    <div className="loader-inner"></div>
                    <div className="indicator">
                        <svg width="16px" height="12px">
                            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                            <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            {/* End Preloader */}

            {/* Navbar */}
            <Navbar />

            {/* Slider */}
            <section className="slider">
                <div className="hero-slider">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`single-slider ${index === currentIndex ? "active" : ""}`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="text">
                                            <h1>{slide.heading}</h1>
                                            <p>{slide.description}</p>
                                            <div className="button">
                                                <a href={slide.button1.link} className="butn">{slide.button1.text}</a>
                                                <a href={slide.button2.link} className="butn">{slide.button2.text}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* End Slider Area */}

            <div>
                {/* Start Schedule Area */}
                <section className="schedule">
                    <div className="container">
                        <div className="schedule-inner">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 ">
                                    {/* single-schedule */}
                                    <div className="single-schedule first">
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="fa fa-ambulance" />
                                            </div>
                                            <div className="single-content">
                                                <span />
                                                <h4>One-to-one appointment</h4>
                                                <p>Get your checkup done online by highly credited doctors according to your
                                                    prefrence.</p>
                                                <a href="#">LEARN MORE<i className="fa fa-long-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/* single-schedule */}
                                    <div className="single-schedule middle">
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="icofont-prescription" />
                                            </div>
                                            <div className="single-content">
                                                <span />
                                                <h4>AI equipped diagnosis</h4>
                                                <p>Let AI help the doctors in your diagnosis for Skin conditions and X-rays. Scan
                                                    your reports and get digital results.</p>
                                                <a href="#">LEARN MORE<i className="fa fa-long-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-12">
                                    {/* single-schedule */}
                                    <div className="single-schedule last">
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="icofont-ui-clock" />
                                            </div>
                                            <div className="single-content">
                                                <span />
                                                <h4>Get smart weekly reports</h4>
                                                {/* <ul class="time-sidual">
                                          <li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                          <li class="day">Saturday <span>9.00-18.30</span></li>
                                          <li class="day">Monday - Thusday <span>9.00-15.00</span></li>
                                      </ul> */}
                                                <p>Get your weekly activity report.<br />Track your health improvement from time to
                                                    time.</p>
                                                <a href="#">LEARN MORE<i className="fa fa-long-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*/End Start schedule Area */}
                {/* Start Feautes */}
                <section className="Feautes section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title align-center">
                                    <h1>We Are Always Ready to Help You &amp; Your Family</h1>
                                    {/* <img src="../images/8.png" alt="#" /> */}
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                {/* Start Single features */}
                                <div className="single-features">
                                    <div className="signle-icon">
                                        <i class="bi bi-hospital-fill"></i>
                                    </div>
                                    <h3>Emergency Help</h3>
                                    <p>Get help in the time of Emergency with just one phone call.</p>
                                </div>
                                {/* End Single features */}
                            </div>
                            <div className="col-lg-4 col-12">
                                {/* Start Single features */}
                                <div className="single-features">
                                    <div className="signle-icon">
                                        <i class="bi bi-file-earmark-medical-fill"></i>
                                    </div>
                                    <h3>Smart Weekly reports</h3>
                                    <p>Keep track of your health and improve faster.</p>
                                </div>
                                {/* End Single features */}
                            </div>
                            <div className="col-lg-4 col-12">
                                {/* Start Single features */}
                                <div className="single-features last">
                                    <div className="signle-icon">
                                        <i class="bi bi-prescription2"></i>
                                    </div>
                                    <h3>Medical Treatment</h3>
                                    <p>AI equipped sevices along with testified profesional doctors.</p>
                                </div>
                                {/* End Single features */}
                            </div>
                        </div>
                    </div>
                </section>
                {/*/ End Feautes */}
                {/* Start Fun-facts */}
                <div id="fun-facts" className="fun-facts section overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                {/* Start Single Fun */}
                                <div className="single-fun">
                                    {/* <i className="icofont icofont-home" /> */}
                                    <i className="bi bi-person"></i>
                                    <div className="content">
                                        <span className="counter">3468</span>
                                        <p>Hospital Rooms</p>
                                    </div>
                                </div>
                                {/* End Single Fun */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                {/* Start Single Fun */}
                                <div className="single-fun">
                                    {/* <i className="icofont icofont-user-alt-3" /> */}
                                    <i className="bi bi-file-medical"></i>
                                    <div className="content">
                                        <span className="counter">557</span>
                                        <p>Specialist Doctors</p>
                                    </div>
                                </div>
                                {/* End Single Fun */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                {/* Start Single Fun */}
                                <div className="single-fun">
                                    {/* <i className="icofont-simple-smile" /> */}
                                    <i className="bi bi-emoji-laughing-fill"></i>
                                    <div className="content">
                                        <span className="counter">4379</span>
                                        <p>Happy Patients</p>
                                    </div>
                                </div>
                                {/* End Single Fun */}
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Fun-facts */}
            </div>

            {/* Start Why choose */}
            <section className="why-choose section" id="about us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Offer Different Services To Improve Your Health</h2>
                                {/* <img src="img/section-img.png" alt="#" /> */}
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Left */}
                            <div className="choose-left">
                                <h3>Who We Are</h3>
                                <p>Welcome to HealthHub, where you can explore a wealth of information on various aspects of
                                    health and well-being. Our mission is to empower you with knowledge to make informed
                                    decisions about your health. Whether you're looking for tips on maintaining a healthy
                                    lifestyle, insights into common health conditions, or guidance on preventive healthcare,
                                    you'll find it all here. </p>
                                <p>Here are some prominent services provided by us:
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            <li><i className="bi bi-caret-right" />One-on-one interaction with the doctor. </li>
                                            <li><i className="bi bi-caret-right" />24/7 availability of services.</li>
                                            <li><i className="bi bi-caret-right" />AI based checkup.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            <li><i className="bi bi-caret-right" />Diagnosis of skin infections and x-ray scans.
                                            </li>
                                            <li><i className="bi bi-caret-right" />Weekly AI based report.</li>
                                            <li><i className="bi bi-caret-right" />Improve with ealthHub</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Choose Left */}
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Rights */}
                            <div className="choose-right">
                                <div className="video-image">
                                    {/* Video Animation */}
                                    {/* <div class="promo-video">
								<div class="waves-block">
									<div class="waves wave-1"></div>
									<div class="waves wave-2"></div>
									<div class="waves wave-3"></div>
								</div>
							</div> */}
                                    {/*/ End Video Animation */}
                                    {/* <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
								class="video video-popup mfp-iframe"><i class="fa fa-play"></i></a> */}
                                </div>
                            </div>
                            {/* End Choose Rights */}
                        </div>
                    </div>
                </div>
            </section>
            {/*/ End Why choose */}


            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
