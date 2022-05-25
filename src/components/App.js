import Todo from './Todo';
import Tabs from './TabsBar';
import { Container, Typography } from '@mui/material';
import '../assets/css/index.css';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h2"
        component="h1"
        align="center"
        sx={{ mt: 4, mb: 5 }}
      >
        #todo
      </Typography>
      <Tabs />
      <Todo />
    </Container>
  );
}

export default App;
