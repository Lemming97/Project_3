import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//set apollo.router and client
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

//pages
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import "./App.css";

//import authorization
import auth from "./utils/auth";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = auth.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//establish apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),

  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  cache: new InMemoryCache(),
});

function App() {
  <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/saved" component={SavedBooks} /> */}
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  </ApolloProvider>;

  // return <LandingPage />;
}

export default App;
