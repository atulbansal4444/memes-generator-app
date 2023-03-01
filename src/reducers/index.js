import { combineReducers } from "redux";
import Memes from "./memes";
import MyMemes from "./MyMemes";

const rootReducers = combineReducers({
  Memes,
  MyMemes
});

export default rootReducers;
