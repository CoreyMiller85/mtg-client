import React, { useState } from "react";
import mtgifyURL from "../api/mtg-ify";
import Table from "./Table";
import CardList from "./CardList";
import Header from "./Header";
import Hero from "./Hero";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await mtgifyURL.get("/api/cards?name=" + inputValue);
    setCards(response.data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        {/* <Header />
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="search-bar">Search: </label>
            <input
              type="text"
              name="search-bar"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div> */}
        <Table />
        {/* <CardList cards={cards} /> */}
      </div>
    );
  }
};

export default App;
