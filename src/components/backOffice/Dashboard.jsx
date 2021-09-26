import React from "react";
import "../../sass/_main.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <body>
      <header>
        <nav className="dashnav">
          <div className="icon_title">
            <div className="icon">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="title">
              <h1>Dashboard</h1>
            </div>
          </div>
          <input type="text" placeholder="search" />
          <figure>
            <div className="img">
              <img src="./images/dark8.jpg" alt="user" />
            </div>
            <figcaption>
              <span className="name">John doe</span>
              <span className="role">super admin</span>
            </figcaption>
          </figure>
        </nav>
        <nav className="navMobile">
          <div className="icon_title">
            <div className="icon">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="title">
              <h1>Dashboard</h1>
            </div>
          </div>
          <figure>
            <div className="img">
              <img src="./images/dark8.jpg" alt="user" />
            </div>
          </figure>
        </nav>
        <aside className="sideNav">
          <div className="content">
            <div className="logo"></div>
          </div>
        </aside>
      </header>
      <main>
        <h3>is this working</h3>
      </main>
    </body>
  );
};

export default Dashboard;
