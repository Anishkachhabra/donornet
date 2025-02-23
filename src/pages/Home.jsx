import React, { useEffect, useRef, useState } from "react";
import "../CSS/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../images/6.png";
import img2 from "../images/7.png";
import img3 from "../images/8.png";

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
        <div className="container mx-auto px-4 py-8">
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

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
