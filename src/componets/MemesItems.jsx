import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postMeme } from "../actions/fetch";

const MemesItems = ({ id, url, name, topText, bottomText, postMeme }) => {
  const [hovered, setHovered] = useState(false);

  const postMemeFunc = (topText, bottomText) => {
    postMeme({
      template_id: id,
      text0: topText,
      text1: bottomText
    });
  }

  return (
    <div
      className="meme-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => postMemeFunc(topText, bottomText)}>
      <img className={`meme-img ${hovered ? 'darken-img':''}`} src={url} alt={name} />
      <p className={hovered ? "meme-txt" : "no-txt"}>
        {name}
      </p>
    </div>
  );
};

MemesItems.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};

const MemesItemsContainer = connect(null, { postMeme })(MemesItems);

export default MemesItemsContainer;