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
    setTimeoutId(setTimeout(() => setSearchTerm(receivedTxt.trim()), 500));
  }

  const [movies, setMovies] = useState([]);

  async function fetchData(receivedTxt) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "a9944bf1",
        s: receivedTxt,
      },
    });
    if (response.data.Error) {
      setMovies([]);
    } else {
      setInputs(true);
      setSearchResults(true);
      setMovies(response.data.Search);
    }
  }

  useEffect(() => {
    if (searchTerm) {
      fetchData(searchTerm);
    }
  }, [searchTerm]);

  const [searchResults, setSearchResults] = useState(false);
  document.addEventListener("click", () => setSearchResults(false));

  function clickHandler(recBoolean) {
    setSearchResults(recBoolean);
  }

  return (
    <Fragment>
      <Header />
      <div className="container">
        <main>
          <Search
            onInput={onInput}
            movies={movies}
            searchResults={searchResults}
            onClick={clickHandler}
          />
          <Search
            onInput={onInput}
            movies={movies}
            searchResults={searchResults}
            onClick={clickHandler}
          />
        </main>
        <PlaceholderTxt inputs={inputs} />
      </div>
    </Fragment>
  );
};

export default App;
