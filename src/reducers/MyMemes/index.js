import { POST_MEME, POST_MEME_ERROR, POST_MEME_SUCCES } from "../../actions/fetch";

const MyMemes = (
  state = {
    isAddingNewMeme: false,
    myMemes: [],
    errMsg: ''
  },
  action
) => {
  switch (action.type) {
    // case NEW_MEME:
    //   return [...state, action.meme];
    case POST_MEME:
      return {
        ...state,
        isAddingNewMeme: true
      };
    case POST_MEME_SUCCES:
      return {
        ...state,
        isAddingNewMeme: false,
        myMemes: state.myMemes.push(action.meme)
      };
    case POST_MEME_ERROR:
      return {
        isAddingNewMeme: false,
        errMsg: action.err
      };
    default:
      return state;
  }
};

export default MyMemes