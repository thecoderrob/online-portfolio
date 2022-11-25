import React from "react";

const FeaturedCard = ({ id, img, title, desc }) => {
  return (
    <div className="featured-card | flex">
      <img src={`/src/assets/images/${img}`} alt="" />
      <div className="flow">
        <h2 className="fs-800 fw-bold text-neutral-600">0{id}</h2>
        <h1 className="fs-700 fw-bold text-neutral-800">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
