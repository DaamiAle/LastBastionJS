import { Graphics } from "pixi.js";
import BaseGame from "../Core/BaseGame";


class LastBastionGame extends BaseGame {
    constructor() {
        super("Last Bastion");
    }
    public StartGame(): void {
        let obj = new Graphics()
            .rect(0, 0, 200, 100)
            .fill(0xff0000);
        this.gameEngine.app.stage.addChild(obj);















        // Iniciamos el renderizado
        this.gameEngine.start();
    }
}
export default LastBastionGame;