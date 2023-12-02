function reducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_EDITOR_STATE:
        return {
          ...state,
          editorState: action.payload
        };
      default:
        return state;
    }
  }
  
export default reducer;