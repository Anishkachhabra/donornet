import React, { useEffect, useRef, useState } from "react";
import "../CSS/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../images/6.png";
import img2 from "../images/7.png";
import img3 from "../images/8.png";
import 'bootstrap/dist/css/bootstrap.css';

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
                                        <i className="icofont icofont-ambulance-cross" />
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
                                        <i className="icofont icofont-medical-sign-alt" />
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
                                        <i className="icofont icofont-stethoscope" />
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
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Start Single Fun */}
                                <div className="single-fun">
                                    <i className="icofont icofont-home" />
                                    <div className="content">
                                        <span className="counter">3468</span>
                                        <p>Hospital Rooms</p>
                                    </div>
                                </div>
                                {/* End Single Fun */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Start Single Fun */}
                                <div className="single-fun">
                                    <i className="icofont icofont-user-alt-3" />
                                    <div className="content">
                                        <span className="counter">557</span>
                                        <p>Specialist Doctors</p>
                                    </div>
                                </div>
                                {/* End Single Fun */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Start Single Fun */}
                                <div className="single-fun">
                                    <i className="icofont-simple-smile" />
                                    <div className="content">
                                        <span className="counter">4379</span>
                                        <p>Happy Patients</p>
                                    </div>
                                </div>
                                {/* End Single Fun */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Start Single Fun */}
                                <div className="single-fun">
                                    <i className="icofont icofont-table" />
                                    <div className="content">
                                        {/* <span class="counter">32</span> */}
                                        <p><b>Book appointment</b> according to your prefrence</p>
                                    </div>
                                </div>
                                {/* End Single Fun */}
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Fun-facts */}
            </div>


            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
