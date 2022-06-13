import Tabs from './TabsBar';
import Title from './Title';
import { Container } from '@mui/material';
import '../assets/css/index.css';

function App() {
  return (
    <Container maxWidth="sm">
      <Title />
      <Tabs />
    </Container>
  );
}

export default App;
