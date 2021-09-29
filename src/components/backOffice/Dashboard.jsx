import React, { useState, useRef } from "react";
import "../../sass/_main.scss";
/// do the media queries thingy today
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import {
  faBars,
  faHome,
  faPenAlt,
  faPencilAlt,
  faPlus,
  faSignOutAlt,
  faStore,
  faUser,
  faUsers,
  faCalendar,
  faShoppingBag,
  faDollarSign,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [display, setdisplay] = useState(false);
  const SidebarRef = useRef();
  const dropdownDisplayer = function () {
    setdisplay(!display);
    setTimeout(() => {
      setdisplay(false);
    }, 9000);
  };
  const displaySideMenu = function () {
    // console.log(SidebarRef.current);
    SidebarRef.current.classList.toggle("d-none");
  };

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
          <div>
            <figure>
              <div className="img" onClick={dropdownDisplayer}>
                <img src="./images/dark8.jpg" alt="user" />
              </div>
              <figcaption>
                <span className="name">John doe</span>
                <span className="role">super admin</span>
              </figcaption>
            </figure>
            {display === true ? (
              <div className="dropdown">
                <ul>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faStore} /> Store
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faPenAlt} />
                    Change password
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    Logout
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
        {/* mobile navigation */}

        <nav className="navMobile">
          <div className="icon_title">
            <div className="icon" onClick={displaySideMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="title">
              <h1>Dashboard</h1>
            </div>
          </div>
          <figure>
            <div className="img">
              <img
                src="./images/dark8.jpg"
                alt="user"
                onClick={dropdownDisplayer}
              />
            </div>
            {display === true ? (
              <div className="dropdown">
                <ul>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faStore} /> Store
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faPenAlt} />
                    Change password
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    Logout
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </figure>
        </nav>
        {/* Aside navbar */}
        <aside
          className={isMobile ? "d-none sideNav" : "sideNav"}
          ref={SidebarRef}
        >
          <div className="content">
            <div className="menuElements">
              <a href="">
                <FontAwesomeIcon icon={faPlus} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faPencilAlt} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faHome} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>
          </div>
        </aside>
      </header>
      <main>
        <section className="info_cards">
          <div className="thecard">
            <div className="info">
              <span className="info-num">45</span>
              <FontAwesomeIcon className="info-icon" icon={faUsers} />
            </div>
            <span className="info-text">Customers</span>
          </div>
          <div className="thecard">
            <div className="info">
              <span className="info-num">79</span>
              <FontAwesomeIcon className="info-icon" icon={faCalendar} />
            </div>
            <span className="info-text">Products</span>
          </div>
          <div className="thecard">
            <div className="info">
              <span className="info-num">124</span>
              <FontAwesomeIcon className="info-icon" icon={faShoppingBag} />
            </div>
            <span className="info-text">Orders</span>
          </div>
          <div className="thecard">
            <div className="info">
              <span className="info-num">$6k</span>
              <FontAwesomeIcon className="info-icon" icon={faMoneyBillWave} />
            </div>
            <span className="info-text">income</span>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Dashboard;
