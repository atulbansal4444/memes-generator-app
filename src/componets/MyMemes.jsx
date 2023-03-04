import React from "react";
import { connect } from "react-redux";
import { getMyMemesArray } from "../selectors/Memes";

const MyMemes = ({ myMemes }) => {
  return (
    <div>
      {
        myMemes.map((meme, index) => {
          return (
            <img key={index} src={meme.url} alt="my-meme" className="my-meme-image"/> 
          )
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    myMemes: getMyMemesArray(state)
  };
};

const MyMemesContainer = connect(
  mapStateToProps
)(MyMemes);

export default MyMemesContainer;
