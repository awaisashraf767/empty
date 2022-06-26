import React from "react";
import Card from "./Card";
import Data from "./Data";
const Services = () => {



  return (
    <React.Fragment>
      <section className="services">
        <div className="container">
          <div className="row my-3">
            <h3 className="text-center">Our Services</h3>
          </div>
          <div className="row my-2">
            {Data.map((val, index) => {
              return (
                <Card
                  key={index}
                  id={index}
                  title={val.name}
                  img={val.imgsrc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
