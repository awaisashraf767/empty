import React from "react";
import Common from "./Common";
import web from "../src/image/about1.PNG";
const Home = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="row">
            <Common
              name="Grow your business with "
              go="Get Started"
              img={web}
              path="/services"
            />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Home;
