import React, { useRef, useState } from "react";
import TshirtColor from "./TshirtColor";
import BannerPosition from "./BannerPosition";

const UploadAndDisplayImage = () => {
  const image = useRef(null);
  const [baseImage, setBaseImage] = useState([]);

  const handleRemove = (index) => {
    // console.log('index',index);
    setBaseImage(baseImage.filter((img) => img !== index));
  };
  const handleChange = (e) => {
    convertBase64Handler(e.target.files);
  };
  // console.log(baseImage)
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const convertBase64Handler = async (files) => {
    const filePathsPromises = [];
    // console.log(files)
    Object.values(files).forEach((file) => {
      filePathsPromises.push(toBase64(file));
    });
    const filePaths = await Promise.all(filePathsPromises);
    // console.log(filePaths);
    setBaseImage(filePaths);
  };

  return (
    <>
      <div className="p-3 bg-light" style={{}}>
        <p>POST ACTION</p>
        <button className="btn btn-dark px-4" style={{ fontSize: "12px" }}>
          PUBLISH
        </button>
      </div>

      <div className="mt-2 p-3 bg-light">
        <label className="btn btn-secondary" for="file-upload">
          Upload Image
          <input
            // style={{ display: "block" }}
            type="file"
            id="file-upload"
            hidden
            multiple
            ref={image}
            onChange={handleChange}
          />
        </label>
        <br />
        {baseImage.map((item, index) => {
          // console.log('item', item)
          return (
            <div className="mt-2" key={index}>
              <img alt="not found!" src={item} style={{ width: "150px" }} />

              <br />
              <button
                onClick={() => handleRemove(item)}
                className="mt-2 px-3 p-1 border-0 rounded"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-2 p-3 bg-light">
        <BannerPosition />
      </div>

      <div className="mt-2 p-3 bg-light">
        <TshirtColor />
      </div>
    </>
  );
};

export default UploadAndDisplayImage;
