import { useState } from 'react';
import {
    Container,
    CardMedia,
    Button,
    ButtonGroup,
    Box
} from '@mui/material';

function ControlBar() {

    const [navbarOptions, setNavbarOptions] = useState([
        { texto: 'Menu' },
        { texto: '1' },
        { texto: '2' },
        { texto: '3' },
        { texto: '4' },
        { texto: '5' },
        { texto: '6' },
        { texto: '7' },
        { texto: '8' },
        { texto: '9' }
    ]);

    return (
        <Container id="ControlBar" sx={{ flexGrow: 1 }} style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: "1em",
                    paddingBottom: "1em",
                }}
            >
                <ButtonGroup variant="text" aria-label="Basic button group" className="navBarHeader" sx={{
                    margin: "0",
                    backgroundColor: 'rgba(20,20,20, 0.90)' // Color blanco translúcido
                }}>
                {navbarOptions.map((option, index) => (
                        <Button key={index} sx={{ color: 'white' }}>{option.texto}</Button>
                    ))}
                </ButtonGroup>
            </Box>
        </Container>
    );
}

export default ControlBar;