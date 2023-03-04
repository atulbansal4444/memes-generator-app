import React, { useState } from "react";
import { connect } from "react-redux";
import { getMemes, isFetchingMemes } from "../selectors/Memes";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import MemesItemsContainer from "./MemesItems";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import MyMemesContainer from "./MyMemes";

import "../styles/styles.css";

const App = ({ isFetchingMemes, memesList }) => {
  const [memesLimit, setMemesLimit] = useState(10);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  return (
    <div className="app">
      <h2><u>Memes Generator</u></h2>
      <MyMemesContainer />
      <h4><i>Write some text</i></h4>
      <Form inline={'true'}>
        <FormGroup>
          <FormLabel>Top</FormLabel>
          {' '}
          <FormControl type="text" onChange={(e) => setTopText(e.target.value)}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <FormLabel>Bottom</FormLabel>
          {' '}
          <FormControl type="text" onChange={(e) => setBottomText(e.target.value)}/>
        </FormGroup>
      </Form>
      {isFetchingMemes && <CircularProgress />}
      {
        !isFetchingMemes &&
          memesList.slice(0, memesLimit).map((meme, index) => {
            return <MemesItemsContainer key={index} url={meme.url} name={meme.name}
              topText={topText} bottomText={bottomText} id={meme.id} />;
          })
      }
      <div className="btn-load-more-memes" onClick={() =>
        setMemesLimit(memesLimit + 10)
      }>
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
