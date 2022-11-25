import React from "react";

const NewCard = ({ title, desc }) => {
  return (
    <div className="new-card | flow">
      <h2 className="fs-700 fw-bold text-neutral-100">{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default NewCard;
