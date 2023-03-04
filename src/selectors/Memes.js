const getMemes = state => state.Memes.memes;
const isFetchingMemes = state => state.Memes.isFetchingMemes;
const getMyMemesArray = state => state.MyMemes.myMemes;

export { getMemes, isFetchingMemes, getMyMemesArray };
