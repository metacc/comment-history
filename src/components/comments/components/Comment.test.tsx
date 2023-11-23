import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Comment from './Comment';
import { CommentItem } from "../models";

describe('<Comment />', () => {
    const mockComment: CommentItem = {
        id: 1,
        postId: 1,
        name: "John Doe",
        email: "johndoe@test.hu",
        body: "Test lorem ipsum comment"
    };

    it('renders without crashing', () => {
        render(<Comment comment={mockComment} />);
        const commentElement = screen.getByTestId("comment-item");
        expect(commentElement).toBeInTheDocument();
    });

    it('displays the correct avatar initials', () => {
        render(<Comment comment={mockComment} />);
        const avatarElement = screen.getByText("JD");
        expect(avatarElement).toBeInTheDocument();
    });

    it('renders name and email', () => {
        render(<Comment comment={mockComment} />);
        const nameElement = screen.getByText(mockComment.name);
        const emailElement = screen.getByText(mockComment.email);
        expect(nameElement).toBeInTheDocument();
        expect(emailElement).toBeInTheDocument();
    });

    it('displays the comment body', () => {
        render(<Comment comment={mockComment} />);
        const bodyElement = screen.getByText(mockComment.body);
        expect(bodyElement).toBeInTheDocument();
    });
});