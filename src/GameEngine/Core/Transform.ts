import GameObject from "./GameObject";
import Vector2 from "./Vector2";

class Transform{
    gameObject: GameObject;
    position: Vector2;
    scale: Vector2;
    rotation: number;

    constructor(gameObject: GameObject, position: Vector2 = new Vector2(), scale: Vector2 = new Vector2(1, 1), rotation: number = 0) {
        this.gameObject = gameObject;
        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
    }
    public relocate(position: Vector2) {
        this.position = position;
    }
  }
export default Transform;