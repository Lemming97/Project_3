import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
// import { Helmet } from "react-helmet";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

// import logo from "./logo.svg";
import "./App.css";

//establish apollo client
const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

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
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header
            currentTab={currentTab}
            handleTabChange={handleTabChange}
          ></Header>
          <main>{renderTab()}</main>

          {/* <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch> */}

          <Footer></Footer>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
