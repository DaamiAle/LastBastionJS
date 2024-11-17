import { Application } from 'pixi.js';
import GameObject from './GameObject';

class GameEngine{
    // Singleton
    private static instance: GameEngine;
    static GameEngine(): GameEngine {
        if (!this.instance) {
            this.instance = new GameEngine();
        }
        return this.instance;
    }
    private constructor() {
        this.gameObjects = [];
        this.alto = window.innerHeight * 0.85;
        this.ancho = window.innerWidth * 0.9;
        this.backgroundColor = 0x333333;
        this.app = new Application();
        this.appPromise = this.app.init({
            width: this.ancho,
            height: this.alto,
            backgroundColor: this.backgroundColor
        })
    }

    // Attributes & Properties
    gameObjects: GameObject[];
    ancho: number;
    alto: number;
    backgroundColor: number;
    app: Application;
    private appPromise: Promise<void>;
    frameCounter: number = 0;

    // Methods
    public start() {
        this.appPromise.then(() => {
            const gameHTML = document.getElementById("Game");
            if (!(gameHTML === null) && gameHTML.childElementCount === 0) {
                gameHTML.appendChild(this.app.canvas);
                window.__PIXI_APP__ = this.app;
                this.chargeGameObjects();
                this.app.ticker.add(() => {
                    this.update()
                })
            }
        });

    }

    public update() {
        for (const gameObject of this.gameObjects) {
            gameObject.update();
        }
    }
    private chargeGameObjects() {
        for (const gameObject of this.gameObjects) {
            this.app.stage.addChild(gameObject.transform);
        }
    }
    public addGameObject(gameObject: GameObject) {
        this.gameObjects.push(gameObject);
    }
}
export default GameEngine;