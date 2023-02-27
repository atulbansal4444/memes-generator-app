import React, { useState } from "react";
import { connect } from "react-redux";
import { getMemes, isFetchingMemes } from "../selectors/Memes";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import MemesItems from "./MemesItems";

import '../styles/styles.css';

const App = ({ isFetchingMemes, memesList }) => {
  const [memesLimit, setMemesLimit] = useState(10);
  return (
    <div className="app">
      <h2>Memes Generator</h2>
      {isFetchingMemes && <CircularProgress />}
      {
        !isFetchingMemes &&
          memesList.slice(0, memesLimit).map((meme, index) => {
            return (<MemesItems key={index} url={meme.url} name={meme.name} />);
          })
      }
      <div
        className="btn-load-more-memes"
        onClick={() => setMemesLimit(memesLimit + 10)}>
        Load 10 more memes...
      </div>
    </div>
  );
};

App.propTypes = {
  isFetchingMemes: PropTypes.bool.isRequired,
  memesList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isFetchingMemes: isFetchingMemes(state),
    memesList: getMemes(state),
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
