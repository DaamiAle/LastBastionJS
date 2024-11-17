import { Container } from "pixi.js";
import GameObject from "./GameObject";

class Transform extends Container{
    gameObject: GameObject;

    constructor(gameObject: GameObject, x: number = 0 , y: number = 0) {
        super()
        this.position.set(x,y);
        this.gameObject = gameObject;
    }
  }
export default Transform;