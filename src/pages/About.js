import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container padding">
      <section id="about-section">
        <div className="about-left">
          <img
            src="https://thumbs.dreamstime.com/z/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
            width="400px"
            className="rounded"
          />
        </div>

        <div className="about-right">
          <h4>About</h4>
          <h1>Bloglie ❤ </h1>
          <p>
            Hey! Techieess.. This side your favourite Tech Achiveres Team .Here
            we have made a super cool website for you to share your lovely day
            by day experience all over the world with the help of our blog
            website.Our Blog Website is super cool for all the user because of
            it cool UI and content.So come forward and contribute toward the
            society. Wish you the best 💕
          </p>
          <div className="address">
            <ul>
              <li>
                <span className="address-logo">
                  <i className="fas fa-paper-plane"></i>
                </span>
                <p>Address</p>
                <span className="saprater">:</span>
                <p>Amritsar, Punjab, India</p>
              </li>
              <li>
                <span className="address-logo">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <p>Phone No</p>
                <span classNameName="saprater">:</span>
                <p>+91 628-353-1374 ,+91 987-815-7165 </p>
              </li>
              <li>
                <span className="address-logo">
                  <i className="far fa-envelope"></i>
                </span>
                <p>Email ID</p>
                <span className="saprater">:</span>
                <p>techachivers@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="expertise">
            <h3>My Expertise</h3>
            <ul>
              <li>
                <span className="expertise-logo">
                  <i className="fab fa-html5"></i>
                </span>
                <p>MERN</p>
              </li>
              <li>
                <span className="expertise-logo">
                  <i className="fab fa-css3-alt"></i>
                </span>
                <p>GOOGLE CLOUD</p>
              </li>
              <li>
                <span className="expertise-logo">
                  <i className="fab fa-node-js"></i>
                </span>
                <p>Java Script</p>
              </li>
              <li>
                <span className="expertise-logo">
                  <i className="fab fa-react"></i>
                </span>
                <p>and BLOGGING 😊❤️❤️</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
