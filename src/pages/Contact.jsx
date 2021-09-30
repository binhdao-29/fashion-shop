import React, { useRef } from "react";
import Helmet from "../components/Helmet";
import emailjs from "emailjs-com";
import Map from "../components/Map";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wu5sol",
        "template_uxjt3x4",
        form.current,
        "user_m1aURoRd5zSkZOxHfyql3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Helmet title="Contact Us">
      <div className="contact__banner">
        <h2 className="contact__title">Contact</h2>
      </div>
      <div className="contact-container">
        <div className="container">
          <div className="row">
            <div className="form-contact col-md-6">
              <form ref={form} onSubmit={sendEmail}>
                <h4 className="title">send us a message</h4>
                <div className="form-wrap">
                  <i class="far fa-user-circle"></i>
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-wrap">
                  <i class="far fa-envelope"></i>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="form-wrap">
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="How Can We Help?"
                    className="form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="btn-send cb-btn">
                  Send Email
                </button>
              </form>
            </div>
            <div className="contact-info col-md-6">
              <div className="info__wrapper">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info__content">
                  <span className="info__title">Address</span>
                  <p className="info__text">
                    CoCa Store Center 8th floor, 379 Lang St, Ha Noi, 10018 VN
                  </p>
                </div>
              </div>
              <div className="info__wrapper">
                <i className="fas fa-phone-alt"></i>
                <div className="info__content">
                  <span className="info__title">Lets Talk</span>
                  <p className="info__text--color info__text">
                    (+84) 96 716 6879
                  </p>
                </div>
              </div>
              <div className="info__wrapper">
                <i className="fas fa-envelope"></i>
                <div className="info__content">
                  <span className="info__title">Sale Support</span>
                  <p className="info__text--color info__text">
                    binhchan@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB-zEex5XIZ7DOamNn0OkIWV55WlnQR5qI&callback=initMap`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: `500px`,
              margin: `auto`,
              border: "none",
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Helmet>
  );
};

export default Contact;
