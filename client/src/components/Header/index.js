import React from "react";
import Nav from "../Nav";
import SphereSmall from "../../assets/small/SphereSmall.png";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <img
              src={SphereSmall}
              className="header-icon"
              style={{ width: "100%" }}
              alt="SphereSmall"
            />
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

          <h2>Welcome</h2>
          <p>
            Welcome to Lindsey Martin's portfolio page built with React. Here,
            you can find a small sample of the projects she has worked on over
            the course of the program.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
