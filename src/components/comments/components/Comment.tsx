/* eslint-disable no-debugger */
import { red } from "@mui/material/colors";
import { CommentItem } from "../models";
import { Avatar, Typography, Card, CardContent, CardHeader } from "@mui/material";

interface Props {
    comment: CommentItem;
}

const getInitials = (name: string) => {
    const nameArray = name.split(' ');
    const firstInitial = nameArray[0][0];
    const secondInitial = nameArray[1][0];
    return (firstInitial + secondInitial).toUpperCase();
};

const Comment = (props: Props) => {
    const comment = props.comment;
    const initials = getInitials(comment.name);
    
	return (
		<div>
			<Card style={{marginBottom: '20px'}} data-testid="comment-item">
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }}>
							{initials}
						</Avatar>
					}
					title={comment.name}
					subheader={comment.email}
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary" className="comment__content">
						{comment.body}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default Comment;
