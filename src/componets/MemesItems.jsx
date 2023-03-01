import React, { useState } from "react";
import PropTypes from "prop-types";

const MemesItems = ({ url, name }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="meme-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <img className={`meme-img ${hovered ? 'darken-img':''}`} src={url} alt={name} />
      <p className={hovered ? "meme-txt" : "no-txt"}>
        {name}
      </p>
    </div>
  );
};

MemesItems.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MemesItems;