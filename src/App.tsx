import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CommentList from './components/comments/CommentList';
import { useSelector } from 'react-redux';
import CommentChart from './components/comments/CommentChart';
import { RootState } from './redux/store';

const App = () => {
  const comments = useSelector((state: RootState) => state.comments);

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Comment history
      </Typography>
      
      <Box>
        <Typography variant="h6" gutterBottom>
          Comment Word Count Chart
        </Typography>
        { comments.length > 0 && (
          <CommentChart comments={comments}/>
        )}
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Comment List
        </Typography>
        <CommentList/>
      </Box>
    </Container>
  );
};

export default App;