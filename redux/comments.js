import * as ActionTypes from "./ActionTypes";

export const comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      const comment = action.payload;
      // need to figure out how to add a unique id based on comments array length here
      comment.campsiteId = comments.length + 1;
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
