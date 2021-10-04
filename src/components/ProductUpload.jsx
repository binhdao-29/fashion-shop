import React, { useState } from "react";

const ProductUpload = () => {
  // const [fileImage, setFileImage] = useState(null);

  const filterSelectHandle = (e) => {
    console.log(e.target.files[0]);
  };

  const fileUploadHandle = () => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log("fetch xong..");
      });
  };

  return (
    <div className="product-upload">
      <input type="file" onChange={filterSelectHandle} />
      <button onClick={fileUploadHandle}>Upload</button>
    </div>
  );
};

export default ProductUpload;
