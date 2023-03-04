import { username, password } from './secretKey';

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

// const NEW_MEME = 'NEW_MEME';
// const newMeme = meme => {
//   return {
//     type: NEW_MEME,
//     meme
//   };
// };

const POST_MEME = 'POST_MEME';

const POST_MEME_SUCCES = 'POST_MEME_SUCCESS';
const postMemeSuccess = data => {
  return {
    type: POST_MEME_SUCCES,
    data
  };
};

const POST_MEME_ERROR = 'POST_MEME_ERROR';
const postMemeError = err => {
  return {
    type: POST_MEME_ERROR,
    err
  };
};

const postMeme = params => dispatch => {
  dispatch(postMeme);
  params["username"] = username;
  params["password"] = password;

  const bodyParams = Object.keys(params).map(key => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');

  fetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams
  }).then(response => response.json())
    .then(json => {
      if (json.success) {
        dispatch(postMemeSuccess(json.data));
      } else {
        dispatch(postMemeError(json.error_message));
      }
    })
    .catch(err => {
      dispatch(postMemeError(err.message));
    });
}

export {
  REQUEST_MEMES,
  requestMemes,
  REQUEST_MEMES_SUCCESS,
  requestMemesSuccess,
  REQUEST_MEMES_ERROR,
  requestMemesError,
  fetchMemes,
  // NEW_MEME,
  // newMeme,
  POST_MEME,
  postMeme,
  POST_MEME_SUCCES,
  postMemeSuccess,
  POST_MEME_ERROR,
  postMemeError
};
