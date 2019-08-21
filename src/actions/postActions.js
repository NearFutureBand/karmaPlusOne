export const CHANGE_TEXT = 'CHANGE_TEXT';
export const NEW_POST = 'NEW_POST';
export const CLEAR_TEXT_INPUT = 'CLEAR_TEXT_INPUT';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export const changeText = (text) => ({
  type: CHANGE_TEXT,
  payload: text,
});

export const newPostAction = (postText, postCategory) => ({
  type: NEW_POST,
  payload: {
    text: postText,
    timestamp: Date.now(),
    category: postCategory,
  }
});

export const clearTextInput = () => ({
  type: CLEAR_TEXT_INPUT,
});

export const newPost = (postText, postCategory) => {
  return (dispatch) => {
    dispatch(
      newPostAction(postText, postCategory)
    );
    return dispatch(
      clearTextInput()
    );
  }
}

export const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
  payload: category,
})


