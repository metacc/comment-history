import { SET_COMMENTS } from './actions';
import { PayloadAction } from '@reduxjs/toolkit';
import { CommentItem } from './models';

const commentsReducer = (state: CommentItem[] = [], action: PayloadAction<CommentItem[]>) => {
    switch (action.type) {
        case SET_COMMENTS:
            return action.payload;
        default:
            return state;
    }
};

export default commentsReducer;