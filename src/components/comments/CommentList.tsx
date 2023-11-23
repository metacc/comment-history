import React, { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./actions";
import { CommentItem } from "./models";
import { Action } from "redux";
import { RootState } from "../../redux/store";
import Comment from "./components/Comment";
import { VariableSizeList } from 'react-window';

const CommentList = () => {
	const dispatch: ThunkDispatch<Array<CommentItem>, void, Action> = useDispatch();
	const comments = useSelector((state: RootState) => state.comments);

	useEffect(() => {
		dispatch(fetchComments());
	}, [dispatch]);

	const containerPadding = window.innerWidth > 600 ? 48 : 32;

	const commentContentWidth = Math.min(window.innerWidth - containerPadding - 32, 1120);

	const getItemSize = (index: number) => {
		const comment = comments[index];
		const baseHeight = 112;
		const lineHeight = 20;
		const padding = 20;
	
		const charsPerLine =  commentContentWidth / 6.7;
		const lineCount = Math.ceil((comment.body.length || 1) / charsPerLine);

		return baseHeight + (lineCount * lineHeight) + padding;
	};
	
	const renderRow = ({ index, style }: { index: number; style: React.CSSProperties }) => {
		const comment = comments[index];
		if (!comment) return null;
		
		return (
			<div style={{ ...style, width: '100%'}}>
				<Comment key={comment.id} comment={comment} />
			</div>
		);
	};

	return (
		<div>
			{comments.length > 0 && (
				<VariableSizeList
					height={600}
					width='100%'
					itemCount={comments.length}
					itemSize={getItemSize}
				>
					{renderRow}
				</VariableSizeList>
			)}
		</div>
	);
};

export default CommentList;


