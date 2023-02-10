import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AppContext } from "../App";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import DropDown from "../components/dropdown/DropDown";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import Switch from "../components/switch/Switch";




const Dashboard = () => {

  const{currentUser} = useContext(AppContext)
  const dropItems = [
    {
      title: "Configuration",
      url: "/",
      icon: true,
    },
    {
      title: "Log out",
      url: "/",
      logOut:function(){
        signOut(auth)
      }
    },
  ];



  return (
    <div className="page-dashboard__row">
      <aside className="page-dashboard__aside aside ">
        {/* <!-- toggle click "aside__btn-open" className "menu-open" open/close menu to > 1200px -->
					<!-- ex - <aside className="page-dashboard__aside aside menu-open"> --> */}
        <button className="aside__btn-open icon-menu">
          <span></span>
        </button>
        <a href="#" className="aside__logo">
          <img src={currentUser?.photoURL} alt="" />
        </a>
        <div className="aside__top">
          <DropDown
            title={currentUser?.displayName}
            className={"aside__dropdown"}
            dropIcon={
              <svg fill="none">
                <path d="M6.49996 8.20529C6.26698 8.20529 6.03402 8.11633 5.85639 7.93878L0.266684 2.34902C-0.0888946 1.99344 -0.0888946 1.41693 0.266684 1.0615C0.622118 0.706063 1.19851 0.706063 1.55412 1.0615L6.49996 6.00763L11.4458 1.06167C11.8014 0.706236 12.3778 0.706236 12.7332 1.06167C13.0889 1.4171 13.0889 1.99361 12.7332 2.34919L7.14354 7.93896C6.96582 8.11653 6.73286 8.20529 6.49996 8.20529Z" />
              </svg>
            }
          >
            <ul className="dropdown__items">
              {dropItems?.map((item) => (
                <li key={item.title} onClick={item.logOut && item.logOut}>
                  <a
                    className={
                      item.icon
                        ? "dropdown__item dropdown__item_conf"
                        : "dropdown__item"
                    }
                    href={item.url}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </DropDown>
          <Link to="/create"
              className="aside__btn btn-block"
            >
            <span>Create ticket</span>
          </Link>
        </div>
        <div className="aside__body">
          <nav className="aside__nav nav-aside">
            <ul className="nav-aside__list">
              <li>
                <NavLink to="/tickets"  className="nav-aside__item " >
                  Tickets
                </NavLink>
              </li>
              <li>
                <NavLink to="/reports" className="nav-aside__item">
                  Reports
                </NavLink>
              </li>
            </ul>
          </nav>

          <DropDown
            title="Configuration"
            icon={"dropdown__name_conf-icon"}
            dropIcon={
              <svg fill="none">
                <path d="M6.49996 8.20529C6.26698 8.20529 6.03402 8.11633 5.85639 7.93878L0.266684 2.34902C-0.0888946 1.99344 -0.0888946 1.41693 0.266684 1.0615C0.622118 0.706063 1.19851 0.706063 1.55412 1.0615L6.49996 6.00763L11.4458 1.06167C11.8014 0.706236 12.3778 0.706236 12.7332 1.06167C13.0889 1.4171 13.0889 1.99361 12.7332 2.34919L7.14354 7.93896C6.96582 8.11653 6.73286 8.20529 6.49996 8.20529Z" />
              </svg>
            }
            className={"aside__dropdown"}
          >
            <ul className="dropdown__items">
              {dropItems?.map((item) => (
                <li key={item.title}>
                  <a
                    className={
                      item.icon
                        ? "dropdown__item dropdown__item_conf"
                        : "dropdown__item"
                    }
                    href={item.url}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </DropDown>
          <Switch />
        </div>
        <a href="#" className="aside__footer">
          <img src="img/log/logo.svg" alt="" />
        </a>
      </aside>
      <div className="page-dashboard__content dashboard-content">
        <Header />
        <div className="dashboard-content__body content-body">
            <Outlet/>           
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
