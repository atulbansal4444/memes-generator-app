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
    case POST_MEME:
      return {
        ...state,
        isAddingNewMeme: true
      };
    case POST_MEME_SUCCES:
      let myMemesRef = [...state.myMemes];
      myMemesRef.push(action.data);
      return {
        ...state,
        isAddingNewMeme: false,
        myMemes: myMemesRef
      };
    case POST_MEME_ERROR:
      return {
        ...state,
        isAddingNewMeme: false,
        errMsg: action.err
      };
    default:
      return state;
  }
};

export default MyMemes