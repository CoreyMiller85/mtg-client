import React from "react";

const Card = (props) => {
  const styles = {
    card: {
      display: "inline-block",
      width: "300px",
      borderRadius: "4.75% / 3.5%",
    },
    img: {
      height: "400px",
      borderRadius: "4.75% / 3.5%",
    },
  };
  const imageThumb = props.data.image_uris ? (
    <img
      style={styles.img}
      src={props.data.image_uris.normal}
      alt={props.data.name}
    />
  ) : (
    <p style={{ color: "white" }}> {props.data.name}</p>
  );

  return <div style={styles.card}>{imageThumb}</div>;
};

export default Card;
