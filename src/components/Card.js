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
  const imageThumb = (
    <img
      style={styles.img}
      src={props.data.image_uris.normal}
      alt={props.data.name}
    />
  );

  const handleAddToCollection = () => {
    props.handlePostData(props.data.id);
  };

  return (
    <div style={styles.card}>
      <div>{imageThumb}</div>
      <div>
        <button onClick={handleAddToCollection}>Add To Collection</button>
      </div>
    </div>
  );
};

export default Card;
