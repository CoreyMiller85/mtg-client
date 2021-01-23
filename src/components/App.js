import React, { useState } from "react";
import axios from "axios";
import CardList from "./CardList";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.get(
      "https://cjm-mtg-collection.herokuapp.com/api/cards?name=" + inputValue
    );
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
      <div style={{ background: "#000" }}>
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
        </div>
        <CardList cards={cards} />
      </div>
    );
  }
};

export default App;
