import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Search from "./components/Search";
import PlaceholderTxt from "./components/PlaceholderTxt";
import axios from "axios";

const App = () => {
  const [inputs, setInputs] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const [timeoutId, setTimeoutId] = useState();

  function onInput(receivedTxt) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(setTimeout(() => setSearchTerm(receivedTxt), 1000));
    // setSearchTerm(receivedTxt);
  }

  async function fetchData(receivedTxt) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "a9944bf1",
        s: receivedTxt,
      },
    });
    console.log(response.data.Search);
  }

  useEffect(() => {
    if (searchTerm) {
      fetchData(searchTerm);
    }
  }, [searchTerm]);

  console.log(searchTerm);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <main>
          <Search onInput={onInput} />
          <Search onInput={onInput} />
        </main>
        <PlaceholderTxt inputs={inputs} />
      </div>
    </Fragment>
  );
};

export default App;
