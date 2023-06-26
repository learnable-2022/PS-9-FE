import React from "react";
import logoNav from "./img/logoNav.png";
import body from "./img/body1.jpg";
import body2 from "./img/body2.jpg";
import hero1 from "./img/hero1.jpg";
import hero2 from "./img/hero2.jpg";
import hero3 from "./img/hero3.jpg";
import profile2 from "./img/profile2.jpg";
import profile1 from "./img/profile1.png";
import profile3 from "./img/profile3.jpg";
import logosmall from "./img/logoSmall.png";
import {
  RiArrowDropDownLine,
  RiCloseLine,
  RiFlashlightLine,
} from "react-icons/ri";
import { BsTag } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const LandingPage = () => {
  const [close, setClose] = useState(false);
  const showNav = () => {
    setClose(!close);
  };
  return (
    <>
      <div className="position">
        <div className="container">
          <div className="nav-con">
            <img src={logoNav} alt="logo" className="logoNav" />
            <nav id="navBar" className={close ? "#navBar active" : "#navBar"}>
              <ul>
                <li className="navList">
                  <a>Product</a>
                  <i>
                    <RiArrowDropDownLine />
                  </i>
                </li>
              </ul>
              <ul className="nav2">
                <li className="navList">
                  <a>Terms</a>
                  <i>
                    <RiArrowDropDownLine />
                  </i>
                </li>

                <li className="navList">
                  <a>Features</a>
                  <i>
                    <RiArrowDropDownLine />
                  </i>
                </li>

                <li className="navList">
                  <a>More</a>
                  <i>
                    <RiArrowDropDownLine />
                  </i>
                </li>

                <li className="navList">
                  <a>Pricing</a>
                  <i>
                    <RiArrowDropDownLine />
                  </i>
                </li>
                <li className="getstartedlink">
                  <a>
                    {" "}
                    <Link to="/getstarted"> Get Started</Link>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mobile-nav" onClick={showNav}>
              {close ? <RiCloseLine /> : <FiMenu />}
            </div>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="body" style={{ backgroundImage: `url(${body})` }}>
        <div className="container">
          <h2 className="headBold">
            Simplify Payroll <br />
            With Wagewise
          </h2>
          <p>
            Streamline your payroll process and pay employees <br />
            effortlessly with USDT (Tether)
          </p>
          <Link className="body-btn" to="/getstarted">
            {" "}
            Get Started
          </Link>
        </div>
      </div>
      {/* the cards session */}
      <div className="benefits" style={{ backgroundImage: `url(${body2})` }}>
        <div className="container">
          <h2 className="general-h2">Benefits</h2>
          <div className="cards">
            <div className="card">
              <RiFlashlightLine />
              <h5>Fast and Secure Payments</h5>
              <p>
                Wagewise enables instant and secure payments to your employees
                using USDT (Tether). Say goodbye to lengthy processing times and
                enjoy the speed of blockchain technology.
              </p>
            </div>
            <div className="card">
              <BsTag />
              <h5>Reduce Cost and Hassles</h5>
              <p>
                With Wagewise, you can eliminate the need for traditional
                banking systems and associated fees. By using USDT (Tether),
                you'll experience cost savings and avoid the hassle of managing
                multiple accounts.
              </p>
            </div>
            <div className="card">
              <GiWorld />
              <h5>Global Accessibility</h5>
              <p>
                Whether your employees are located across town or around the
                world, Wagewise offers borderless payments. Reach your team
                wherever they are and make cross-border transactions with ease
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* how it works session */}
      <article className="works">
        <h2 className="general-h2">How it Works</h2>
        <div className="works-card">
          <div className="works-text">
            <h3>Step 1:</h3>
            <h5>Sign Up for a Wagewise Account</h5>
            <p>
              Create your Wagewise account in just a few simple steps. <br />{" "}
              Provide basic information about your company and get <br /> ready
              to revolutionize your payroll process.
            </p>
          </div>
          <img src={hero1} className="work-img" />
        </div>

        <div className="works-card">
          <img src={hero2} className="work-img" />
          <div className="works-text">
            <h3>Step 2:</h3>
            <h5>Connect your Team</h5>
            <p>
              Invite your employees to join Wagewise and securely link <br />{" "}
              their USDT (Tether) wallets. Enjoy the benefits of instant, <br />
              transparent, and immutable transactions for payroll <br />{" "}
              disbursements.
            </p>
          </div>
        </div>

        <div className="works-card">
          <div className="works-text">
            <h3>Step 3:</h3>
            <h5>Pay Employees Seamlessly</h5>
            <p>
              With Wagewise, paying your employees becomes a breeze.
              <br /> Just enter the payment details, choose the desired date,{" "}
              <br /> and let Wagewise handle the rest. Say goodbye to manual{" "}
              <br /> calculations and paperwork.
            </p>
          </div>
          <img src={hero3} className="work-img" />
        </div>
      </article>
      {/* testimonials session */}
      <div className="testimonial">
        <div className="container">
          <h2 className="general-h2">Testimonials</h2>
          <div className="test-flex">
            <div className="test-prof">
              <img src={profile2} alt="profile 2" className="profile" />
              <div className="test-card">
                <p>
                  "Wagewise has transformed our payroll process. The speed and
                  security of USDT (Tether) payments are unparalleled. Highly
                  recommended!”
                </p>
                <h5>John .A. Smith</h5>
                <p>CEO Keba Tech.</p>
              </div>
            </div>

            <div className="test-prof">
              <img src={profile1} alt="profile 1" className="profile" />
              <div className="test-card">
                <p>
                  "As an international business, we struggled with cross-border
                  payments. Wagewise solved that problem for us with its global
                  accessibility and ease of use."
                </p>
                <h5>Samuel .E. Atiku</h5>
                <p>CEO Zain Tech.</p>
              </div>
            </div>

            <div className="test-prof">
              <img src={profile3} alt="profile 3" className="profile" />
              <div className="test-card">
                <p>
                  "Wagewise has transformed our payroll process. The speed and
                  security of USDT (Tether) payments are unparalleled. Highly
                  recommended!”
                </p>
                <h5>Emily .N. Rodriguez</h5>
                <p>CEO, Mally Corporation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer session */}
      <footer className="prof-footer">
        <div className="container">
          <img
            src={logosmall}
            alt=""
            style={{
              width: "100px",
              background: "transparent",
              paddingBottom: "1.3rem",
            }}
          />
          <div className="foot-flex">
            <div className="foot-card">
              <h4>ABOUT US</h4>
              <p>
                At Wagewise, we are passionate about simplifying payroll
                management for businesses and revolutionizing the way employees
                get paid.
              </p>
            </div>
            <div className="foot-card">
              <h4>TERMS OF USE</h4>
              <p>
                Welcome to Wagewise! These Terms of Use govern your use of our
                website and services. By accessing or using Wagewise, you agree
                to comply with these terms and conditions.{" "}
              </p>
            </div>
            <div>
              <h4>CONTACT US</h4>
              <p>
                customerservice@wagewise.com +234-813-498-7384 Operating hours
                are from 7am – 12am, 7 days a week, excluding holidays.
              </p>
            </div>
          </div>
          <div className="foot-news">
            <h5>NEWS LETTER</h5>
            <p>Keep up with our latest news and events</p>
            <div className="foot-email">
              <form action="mail" onSubmit="e.preventDefault()">
                <input
                  id="mail"
                  type="text"
                  placeholder="Enter Address"
                  className="foot-btn"
                />
                <button className="foot-btn">SUBSCRIBE</button>
              </form>
              <img src={logosmall} alt="logo" className="logobig" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
