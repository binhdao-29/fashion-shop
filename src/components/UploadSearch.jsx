import React, { useState } from "react";
import { Button, Tooltip, Upload, message } from "antd";
import { BsImage } from "react-icons/bs";

const UploadSearch = ({ setCategoryLabel }) => {
  const [loading, setLoading] = useState(false);

  const propsUpload = {
    name: "file",
    action: "http://127.0.0.1:8000/product/savefile",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      setLoading(true);
      if (info.file.status !== "uploading") {
        setCategoryLabel(info.file?.response || "");

        if (info.fileList?.length === 0) {
          setCategoryLabel("No Label");
        }
      }
      if (info.file.status === "done") {
        message.success("Image uploaded successfully");
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
      setLoading(false);
    },
  };

  return (
    <div className="product-upload">
      <Upload {...propsUpload} listType="picture">
        <Tooltip title="Search by image">
          <Button
            loading={loading}
            shape="circle"
            style={{ width: 42, height: 42 }}
            icon={<BsImage />}
          />
        </Tooltip>
      </Upload>
    </div>
  );
};

export default UploadSearch;
