import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ControlBar from './ControlBar';
import GameContainer from './GameContainer';

function App() {

    return (
        <Container id="GameContainer" sx={{ flexGrow: 1 }} style={{ padding: '0' }}>
            <Typography id="GameTitle" variant="h3" gutterBottom></Typography>
            <ControlBar />
            <GameContainer />
        </Container>
    );
}

export default App
