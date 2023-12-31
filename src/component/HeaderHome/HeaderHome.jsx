import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./HeaderHome.scss";
import { NavLink } from "react-router-dom";
export default function HeaderHome() {
  const menu_active = localStorage.getItem("MENU_ACTIVE");
  const [userLogin, setUserLogin] = useState({});
  let USER = {};
  const USER_LOGIN = localStorage.getItem("USER_LOGIN");
  if (USER_LOGIN != null && !userLogin.accountID) {
    USER = JSON.parse(USER_LOGIN);
    setUserLogin(USER);
  }

  return (
    <header>
      <Navbar
        expand="lg"
        className="justify-content-center header border-0"
        id="bg-header"
      >
        <Container className="header-container">
          <div className="flex align-items-center">
            <img
              src={logo}
              style={{ height: "40px", width: "40px", marginRight: "10px" }}
            />
            <Navbar.Brand to="/" className="header-brand">
              Yoga Center
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="header-toggle"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="flex justify-content-end px-3 py-2 pt-0 header-small navbar-item"
          >
            <Nav className="">
              <NavLink
                to="/"
                className={`px-4 nav-item
              ${
                menu_active != null && menu_active == "home-home"
                  ? "nav-item-after-login"
                  : ""
              }`}
                onClick={() => {
                  localStorage.setItem("MENU_ACTIVE", "home-home");
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/course"
                className={`px-4 nav-item
              ${
                menu_active != null && menu_active == "home-course"
                  ? "nav-item-after-login"
                  : ""
              }`}
                onClick={() => {
                  localStorage.setItem("MENU_ACTIVE", "home-course");
                }}
              >
                Course
              </NavLink>
              <NavLink
                to="/blog"
                className={`px-4 nav-item
              ${
                menu_active != null && menu_active == "home-blog"
                  ? "nav-item-after-login"
                  : ""
              }`}
                onClick={() => {
                  localStorage.setItem("MENU_ACTIVE", "home-blog");
                }}
              >
                Blog
              </NavLink>
              {USER_LOGIN != null &&
              userLogin.accountID != null &&
              userLogin.accountID != undefined ? (
                <>
                  {userLogin.role.id != undefined &&
                  userLogin.role.id != null &&
                  (userLogin.role.id == 1 || userLogin.role.id == 2) ? (
                    <NavLink
                      className={`px-4 nav-item`}
                      onClick={() => {
                        if (userLogin.role.id == 1) {
                          window.location.to = "/admin";
                        }
                        if (userLogin.role.id == 2) {
                          window.location.to = "/staff";
                        }
                      }}
                    >
                      Dashboard
                    </NavLink>
                  ) : (
                    <></>
                  )}
                  {userLogin.role.id != undefined &&
                  userLogin.role.id != null &&
                  userLogin.role.id == 3 ? (
                    <>
                      <NavLink
                        className={`px-4 nav-item
                    ${
                      menu_active != null && menu_active == "home-schedule"
                        ? "nav-item-after-login"
                        : ""
                    }`}
                        onClick={() => {
                          localStorage.setItem("MENU_ACTIVE", "home-schedule");
                          window.location.to = "/trainer/schedule";
                        }}
                      >
                        Schedule
                      </NavLink>
                    </>
                  ) : (
                    <></>
                  )}
                  {userLogin.role.id != undefined &&
                  userLogin.role.id != null &&
                  userLogin.role.id == 4 ? (
                    <>
                      <NavLink
                        className={`px-4 nav-item
                    ${
                      menu_active != null && menu_active == "home-schedule"
                        ? "nav-item-after-login"
                        : ""
                    }`}
                        onClick={() => {
                          localStorage.setItem("MENU_ACTIVE", "home-schedule");
                          window.location.to = "/trainee/schedule";
                        }}
                      >
                        Schedule
                      </NavLink>
                      <NavLink
                        className={`px-4 nav-item
                    ${
                      menu_active != null && menu_active == "home-booking"
                        ? "nav-item-after-login"
                        : ""
                    }`}
                        onClick={() => {
                          localStorage.setItem("MENU_ACTIVE", "home-booking");
                          window.location.to = "/transaction";
                        }}
                      >
                        History
                      </NavLink>
                    </>
                  ) : (
                    <></>
                  )}
                  {/* <p className="p-0 m-0 flex align-items-center px-2">
                    Welcome, {userLogin.firstName} {userLogin.lastName}
                  </p> */}
                  <NavLink
                    className={`px-4 nav-item
                     ${
                       menu_active != null && menu_active == "home-profile"
                         ? "nav-item-after-login"
                         : ""
                     }`}
                    onClick={() => {
                      localStorage.setItem("MENU_ACTIVE", "home-profile");
                      window.location.to = `/profile`;
                    }}
                  >
                    Profile
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={`px-4 nav-item
              ${
                menu_active != null && menu_active == "home-login"
                  ? "nav-item-after-login"
                  : ""
              }`}
                    onClick={() => {
                      localStorage.setItem("MENU_ACTIVE", "home-login");
                    }}
                  >
                    Log in
                  </NavLink>
                  <NavLink
                    to="/register"
                    className={`px-4 nav-item
              ${
                menu_active != null && menu_active == "home-register"
                  ? "nav-item-after-login"
                  : ""
              }`}
                    onClick={() => {
                      localStorage.setItem("MENU_ACTIVE", "home-register");
                    }}
                  >
                    Register
                  </NavLink>
                </>
              )}
              {USER_LOGIN != null &&
              userLogin.accountID != null &&
              userLogin.accountID != undefined ? (
                <NavLink
                  className={`px-4 nav-item`}
                  onClick={() => {
                    localStorage.removeItem("USER_LOGIN");
                    localStorage.removeItem("MENU_ACTIVE");
                    USER = {};
                    setUserLogin({});
                    window.location.to = "/";
                  }}
                >
                  <div className="flex p-0 m-0">LogOut</div>
                </NavLink>
              ) : (
                <></>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
