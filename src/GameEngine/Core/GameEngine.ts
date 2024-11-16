import { Application } from 'pixi.js';
import GameObject from './GameObject';

class GameEngine{
    gameObjects: GameObject[];
    ancho: number;
    alto: number;
    backgroundColor: number;
    app: Application;
    private appPromise: Promise<void>;
    frameCounter: number = 0;
    constructor() {
        this.gameObjects = [];
        this.alto = window.innerHeight * 0.85;
        this.ancho = window.innerWidth * 0.9;
        this.backgroundColor = 0x1099bb;
        this.app = new Application();
        this.appPromise = this.app.init({
            width: this.ancho,
            height: this.alto,
            backgroundColor: this.backgroundColor
        })
    }


    public start() {
        this.appPromise.then(() => {
            const gameHTML = document.getElementById("Game");
            if (!(gameHTML === null) && gameHTML.childElementCount === 0) {
                gameHTML.appendChild(this.app.canvas);
            }

        });

    }

    private update() {
        for (const gameObject of this.gameObjects) {
            gameObject.update();
        }
    }

    public addGameObject(gameObject: GameObject) {
        this.gameObjects.push(gameObject);
    }
}
export default GameEngine;