import React from "react";
import Card from "./Card";
const CardList = (props) => {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      background: "#000",
    },
  };

  const cardsMap = props.cards.map((card) => {
    return <Card data={card} />;
  });
  return <div style={styles.container}>{cardsMap}</div>;
};

export default CardList;
