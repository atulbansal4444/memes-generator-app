import React from "react";
import { connect } from "react-redux";

const MyMemes = () => {
  return (
    <div>
    </div>
  );
};

const mapStateToProps = state => {
  return {

  };
};

const MyMemesContainer = connect(
  mapStateToProps
)(MyMemes);

export default MyMemesContainer;
