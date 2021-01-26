import React from "react";
import Card from "./Card";
import mtgifyURL from "../api/mtg-ify";

const CardList = (props) => {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      background: "#000",
    },
  };

  const handlePostData = async (card) => {
    const cardId = {
      id: card,
    };
    await mtgifyURL.post("/api/collection", cardId);
  };

  const cardsMap = props.cards.map((card) => {
    if (card.image_uris) {
      return <Card key={card.id} data={card} handlePostData={handlePostData} />;
    }
  });
  return <div style={styles.container}>{cardsMap}</div>;
};

export default CardList;
