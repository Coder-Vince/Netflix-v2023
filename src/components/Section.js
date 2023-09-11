import React from "react";
import data from "../Assets/data.json";

const Section = () => {
  return (
    <div>
      {data.map((item) => {
        return (
          <section>
            <h1>{item.category}</h1>
            <div className="container">
              {item.images.map((image) => {
                return <img src={image} alt="vignettes" />;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Section;
