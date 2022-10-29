import React from "react";

const List = ({ data }) => {
  const { age, name, image } = data;
  return (
    <div className="person">
      <img src={image} alt="profile" />

      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default List;
