import {
  REQUEST_MEMES,
  REQUEST_MEMES_SUCCESS,
  REQUEST_MEMES_ERROR
} from "../../actions/fetch";

const Memes = (state = {
  isFetchingMemes: false,
  memes: [],
  errMsg: ''
}, action) => {
  switch (action.type) {
    case REQUEST_MEMES:
      return {
        ...state,
        isFetchingMemes: true
      };
    case REQUEST_MEMES_SUCCESS:
      return {
        ...state,
        isFetchingMemes: false,
        memes: action.payload.memes
      };
    case REQUEST_MEMES_ERROR:
      return {
        ...state,
        isFetchingMemes: false,
        errMsg: action.payload
      };
    default:
      return state;
  };
};

export default Memes;
