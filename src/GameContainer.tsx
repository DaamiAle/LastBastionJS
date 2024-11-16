import Container from "@mui/material/Container";
import LastBastionGame from "./GameEngine/LastBastion/LastBastionGame";
import { useEffect } from "react";


function StartGameLoop() {
    let game = new LastBastionGame();
    game.StartGame();
    document.getElementById("GameTitle").innerHTML = game.gameName;
}

function GameContainer() {
    useEffect(() => {
        StartGameLoop();
    },[]);
    return (
        <Container id="Game" sx={{ flexGrow: 1 }} style={{ margin: '0.5em' }}>
        </Container>
    );
}

export default GameContainer;