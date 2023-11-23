import { combineReducers } from 'redux';
import CommentsReducer from '../components/comments/reducers';

const rootReducer = combineReducers({
  comments: CommentsReducer,
});
export default rootReducer;