import React from "react";
import PropTypes from "prop-types";

const MemesItems = ({url, name}) => {
  return (
    <div className="meme-item">
      <img className="meme-img" src={url} alt={name} />
      <p className="meme-txt">
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