import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
// import { Helmet } from "react-helmet";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("about");

  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    // if (currentTab === "Contact") {
    //   return <Contact />;
    // }
    // if (currentTab === "Portfolio") {
    //   return <Portfolio />;
    // }
    // if (currentTab === "Resume") {
    //   return <Resume />;
    // }
    return <About />;
  };

  return (
    <>
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      <main>{renderTab()}</main>
      <Footer></Footer>
    </>
  );
}

export default App;
