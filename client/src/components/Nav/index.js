import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav(props) {
  const { currentTab, handleTabChange } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#sorcerer-sphere"
            onClick={() => handleTabChange("Sorcerer's Sphere")}
            // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentTab === "Sorcerer's Sphere"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Sorcerer's Sphere
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#magic-mark"
            onClick={() => handleTabChange("Magic Mark")}
            // Check to see if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentTab === "Magic Mark" ? "nav-link active" : "nav-link"
            }
          >
            Magic Mark
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#light-worker"
            onClick={() => handleTabChange("Light Worker")}
            // Check to see if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentTab === "Light Worker" ? "nav-link active" : "nav-link"
            }
          >
            Light Worker
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#cash-money"
            onClick={() => handleTabChange("Cash Money")}
            // Check to see if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentTab === "Cash Money" ? "nav-link active" : "nav-link"
            }
          >
            Cash Money
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#login"
            onClick={() => handleTabChange("Login")}
            // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === "Login" ? "nav-link active" : "nav-link"}
          >
            Login/Signup
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
