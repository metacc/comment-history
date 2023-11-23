import axios from 'axios';
import { CommentItem } from './models';
import { Dispatch } from 'redux';

export const SET_COMMENTS = 'SET_COMMENTS';

export const setComments = (comments: CommentItem[]) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const fetchComments = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<CommentItem[]>('https://jsonplaceholder.typicode.com/comments');
      dispatch(setComments(response.data));
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
};