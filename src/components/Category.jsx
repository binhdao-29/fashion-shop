import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

import imageUrl1 from "../assets/images/products/women/wm4.jpg";
import imageUrl2 from "../assets/images/products/men/new2 (1).jpg";
import imageUrl3 from "../assets/images/products/accessories/as_category.jpg";

const categories = [
  {
    title: "Women",
    subtitle: "Spring 2020",
    imageUrl: imageUrl1,
  },
  {
    title: "Men",
    subtitle: "Spring 2021",
    imageUrl: imageUrl2,
  },
  {
    title: "Accessories",
    subtitle: "New Trend",
    imageUrl: imageUrl3,
  },
];

const CategoryCard = ({ title, subtitle, imageUrl }) => {
  const { setCategoryName } = useContext(AppContext);

  const history = useHistory();

  const handleClick = () => {
    setCategoryName(title);

    history.push("/catalog");
  };
  return (
    <div className="col-md-6 col-xl-4">
      <div className="category-card">
        <img src={imageUrl} alt="" />
        <div className="card__wrapper" onClick={handleClick}>
          <div className="card__header">
            <span className="title">{title}</span>
            <span className="subtitle">{subtitle}</span>
          </div>
          <div className="card__link">
            <div className="link">shop now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="row category-row">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              imageUrl={category.imageUrl}
              title={category.title}
              subtitle={category.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
