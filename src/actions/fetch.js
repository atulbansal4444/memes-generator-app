const REQUEST_MEMES = "REQUEST_MEMES";
const requestMemes = () => {
  return {
    type: REQUEST_MEMES,
  };
};

const REQUEST_MEMES_SUCCESS = "REQUEST_MEMES_SUCCESS";
const requestMemesSuccess = (data) => {
  return {
    type: REQUEST_MEMES_SUCCESS,
    payload: data,
  };
};

const REQUEST_MEMES_ERROR = "REQUEST_MEMES_ERROR";
const requestMemesError = (errMsg) => {
  return {
    type: REQUEST_MEMES_ERROR,
    payload: errMsg,
  };
};

const fetchMemes = () => (dispatch) => {
  dispatch(requestMemes());
  const url = "https://api.imgflip.com/get_memes";
  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(requestMemesSuccess(json.data)))
    .catch((err) => dispatch(requestMemesError(err)));
};

export {
  REQUEST_MEMES,
  requestMemes,
  REQUEST_MEMES_SUCCESS,
  requestMemesSuccess,
  REQUEST_MEMES_ERROR,
  requestMemesError,
  fetchMemes,
};
