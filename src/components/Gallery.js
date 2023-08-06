import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/global";
import styled from "./Gallery.module.css";

function Gallery() {
  const { getAnimePictures, pictures } = useGlobalContext();
  const { id } = useParams();

  //state
  const [index, setIndex] = React.useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
  };

  React.useEffect(() => {
    getAnimePictures(id);
  }, [id]);

  return (
    <div className={styled["gall-con"]}>
      <div className={styled["back"]}>
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
          {"<"}Back to Home
        </Link>
      </div>
      <div className={styled["big-image"]}>
        <img src={pictures[index]?.jpg.image_url} alt="" />
      </div>
      <div className={styled["small-images"]}>
        {pictures?.map((picture, i) => {
          return (
            <div
              className={styled["image-con"]}
              onClick={() => {
                handleImageClick(i);
              }}
              key={i}
            >
              <img
                src={picture?.jpg.image_url}
                style={{
                  border:
                    i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                  filter: i === index ? "grayscale(0)" : "grayscale(60%)",
                  transform: i === index ? "scale(1.1)" : "scale(1)",
                  transition: "all .3s ease-in-out",
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
