import React from "react";
import "../../sass/_main.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <body>
      <header>
        <nav className="dashnav">
          <div className="icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <h1>Dashboard</h1>
          <input type="text" />
          <figure>
            <div className="img">
              <img src="./images/dark8.jpg" alt="user" />
            </div>
            <figcaption>
              <span>John doe</span>
              <span>super admin</span>
            </figcaption>
          </figure>
        </nav>
        <nav className="navMobile">
          <div className="icon">
            <FontAwesomeIcon icon={faBars} />
            <h1>Dashboard</h1>
          </div>
          <figure>
            <div className="img">
              <img src="./images/dark8.jpg" alt="user" />
            </div>
          </figure>
        </nav>
      </header>
      <main></main>
    </body>
  );
};

export default Dashboard;
