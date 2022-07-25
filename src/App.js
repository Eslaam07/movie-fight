import React, { Fragment } from "react";
import Header from "./components/Header";
import "./App.css";
import Search from "./components/Search";
import PlaceholderTxt from "./components/PlaceholderTxt";

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <main>
          <Search />
          <Search />
        </main>
        <PlaceholderTxt />
      </div>
    </Fragment>
  );
};

export default App;
