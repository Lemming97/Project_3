import React, { useState } from "react";
import Header from "../src/components/Header";
import Landing from "../src/components/Landing";
// import LightWorker from "./pages/LightWorker";
// import MagicMark from "../src/pages/MagicMark.js";
// import Login from "../src/pages/Login.js";
// import CashMoney from "../src/pages/CashMoney.js";
import Footer from "../src/components/Footer";

import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("landing");

  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    if (currentTab === "Sorcerer-Sphere") {
      return <Landing />;
    }
    // if (currentTab === " Magic Mark") {
    //   return <MagicMark />;
    // }
    // if (currentTab === "Light Worker") {
    //   return <LightWorker />;
    // }
    // if (currentTab === "Login") {
    //   return <Login />;
    // }
    // if (currentTab === "Cash Money") {
    //   return <CashMoney />;
    // }
    return <Landing />;
  };

  return (
    <>
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      <main>
        Test
        {/* {renderTab()} */}
        Test test test
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
