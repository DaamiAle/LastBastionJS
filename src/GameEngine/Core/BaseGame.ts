import GameEngine from "./GameEngine";

abstract class BaseGame {
    protected gameEngine: GameEngine;
    gameName: string;
    constructor(gameName: string) {
        this.gameName = gameName;
        this.gameEngine = GameEngine.GameEngine();
    }

    public abstract StartGame(): void;

}
export default BaseGame;