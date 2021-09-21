import React from "react";
import Helmet from "../components/Helmet";

import postImage1 from "../assets/images/post/blog_post01.jpg";
import postImage2 from "../assets/images/post/blog_post02.jpg";
import postImage3 from "../assets/images/post/blog_post03.jpg";
import proImage1 from "../assets/images/post/blog_product01.jpg";
import proImage2 from "../assets/images/post/blog_product02.jpg";
import proImage3 from "../assets/images/post/blog_product03.jpg";

const blogPost = [
  {
    imageUrl: postImage1,
    title: "8 Inspiring Ways to Wear Dresses in the Winter",
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
  },
  {
    imageUrl: postImage2,
    title: "The Great Big List of Men’s Gifts for the Holidays",
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
  },
  {
    imageUrl: postImage3,
    title: "5 Winter-to-Spring Fashion Trends to Try Now",
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
  },
];

const blogProducts = [
  {
    imageUrl: proImage1,
    title: "White Shirt With Pleat Detail Back",
    price: "19.00",
  },
  {
    imageUrl: proImage2,
    title: "Converse All Star Hi Black Canvas",
    price: "29.00",
  },
  {
    imageUrl: proImage3,
    title: "Nixon Porter Leather Watch In Tan",
    price: "17.00",
  },
];

const archive = [
  {
    name: "July 2021",
    amount: 9,
  },
  {
    name: "June 2021",
    amount: 29,
  },
  {
    name: "May 2021",
    amount: 39,
  },
  {
    name: "April 2021",
    amount: 5,
  },
  {
    name: "Match 2021",
    amount: 35,
  },
  {
    name: "January 2021",
    amount: 55,
  },
  {
    name: "February 2021",
    amount: 26,
  },
  {
    name: "December 2020",
    amount: 21,
  },
];

const tags = [
  {
    name: "Fashion",
  },
  {
    name: "Lifestyle",
  },
  {
    name: "Denim",
  },
  {
    name: "Streetstyle",
  },
  {
    name: "Crafts",
  },
];

function BlogPost({ imgUrl, title, text }) {
  return (
    <div className="blog-post">
      <div className="blog__image">
        <img src={imgUrl} alt="" />
        <div className="date">
          <span>{new Date().getDate()}</span>
          <span>{`${new Date().toLocaleString("en-US", {
            month: "short",
          })} ${new Date().getFullYear()}`}</span>
        </div>
      </div>
      <div className="blog__content">
        <h4 className="blog__title">
          <a href="/">{title}</a>
        </h4>
        <p className="blog__text">{text}</p>
        <div className="blog__info">
          <span className="info">
            <span>By Admin</span>
            <span className="slash">|</span>
            <span>StreetStyle, Fashion, Couple</span>
            <span className="slash">|</span>
            <span>9 Comments</span>
          </span>
          <a href="/blog">
            Continue Reading
            <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <Helmet title="Blog">
      <div className="blog__banner">
        <h2 className="blog__title">Blog</h2>
      </div>
      <div className="blog-container">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              {blogPost.map((blog, index) => (
                <BlogPost
                  key={index}
                  imgUrl={blog.imageUrl}
                  title={blog.title}
                  text={blog.text}
                />
              ))}
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="side-menu">
                <div className="search">
                  <input type="text" name="search" placeholder="Search" />
                  <button className="btn-search">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
                <div className="blog-menu">
                  <div className="blog-menu__title">Categories</div>
                  <ul className="blog-menu__list">
                    <li className="list__item--border list__item">
                      <a href="/blog">Fashion</a>
                    </li>
                    <li className="list__item--border list__item">
                      <a href="/blog">Beauty</a>
                    </li>
                    <li className="list__item--border list__item">
                      <a href="/blog">Street Style</a>
                    </li>
                    <li className="list__item--border list__item">
                      <a href="/blog">Life Style</a>
                    </li>
                    <li className="list__item--border list__item">
                      <a href="/blog">DIY & Crafts</a>
                    </li>
                  </ul>
                </div>
                <div className="blog-menu">
                  <div className="blog-menu__title">Featured Products</div>
                  {blogProducts.map((pro, index) => (
                    <div key={index} className="blog-product">
                      <a className="pro__image" href="/catalog">
                        <img src={pro.imageUrl} alt="" />
                      </a>
                      <div className="pro__info">
                        <a href="/catalog" className="title">
                          {pro.title}
                        </a>
                        <span className="price">${pro.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="blog-menu">
                  <div className="blog-menu__title">Archive</div>
                  <ul className="blog-menu__list">
                    {archive.map((a, index) => (
                      <li key={index} className="list__item">
                        <a href="/blog" className="archive__link">
                          <span>{a.name}</span>
                          <span>({a.amount})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="blog-menu">
                  <div className="blog-menu__title">Tags</div>
                  <ul className="tags-list blog-menu__list">
                    {tags.map((tag, index) => (
                      <li key={index} className="list__item">
                        <a href="/blog" className="tag__link">
                          {tag.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Blog;
