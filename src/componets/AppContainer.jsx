import React from "react";
import { connect } from "react-redux";
import { getMemes, isFetchingMemes } from "../selectors/Memes";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

const App = ({ isFetchingMemes, memesList }) => {
  return (
    <div className="app">
      <h2>Memes Generator</h2>
      {isFetchingMemes && <CircularProgress />}
      {!isFetchingMemes &&
        memesList.map((meme, index) => {
          return (<h4 key={index}>{ meme.name }</h4>);
        })}
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
