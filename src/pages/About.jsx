import React from "react";
import Helmet from "../components/Helmet";

import aboutImage1 from "../assets/images/post/about_image01.jpg";
import aboutImage2 from "../assets/images/post/about_image02.jpg";

function About() {
  return (
    <Helmet title="About">
      <div className="about__banner">
        <h2 className="about__title">About</h2>
      </div>
      <div className="about-container">
        <div className="container">
          <div className="row">
            <div className="about__content col-md-7 col-lg-8">
              <h3 className="content__title">Our Story</h3>
              <p className="content__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit.
              </p>
              <p className="content__text">
                Donec gravida lorem elit, quis condimentum ex semper sit amet.
                Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
                fringilla turpis in vehicula vehicula. Pellentesque congue ac
                orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a
                arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque,
                magna vel dictum rutrum, neque justo eleifend elit, vel
                tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                ligula.
              </p>
              <p className="content__text">
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="image__wrapper">
                <div className="image">
                  <img src={aboutImage1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="about__content col-md-7 col-lg-8">
              <h3 className="content__title">Our Mission</h3>
              <p className="content__text">
                Donec gravida lorem elit, quis condimentum ex semper sit amet.
                Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
                fringilla turpis in vehicula vehicula. Pellentesque congue ac
                orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a
                arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque,
                magna vel dictum rutrum, neque justo eleifend elit, vel
                tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                ligula.
              </p>
              <div className="content__quote">
                <p className="quote">
                  <i>
                    Creativity is just connecting things. When you ask creative
                    people how they did something, they feel a little guilty
                    because they didn't really do it, they just saw something.
                    It seemed obvious to them after a while
                  </i>
                </p>
                <span className="author">- Steve Job’s</span>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="image__wrapper">
                <div className="image">
                  <img src={aboutImage2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default About;
