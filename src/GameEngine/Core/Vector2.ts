class Vector2 {
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
  
    add(v: Vector2): Vector2 {
        return new Vector2(this.x + v.x, this.y + v.y);
    }
  
    subtract(v: Vector2): Vector2 {
        return new Vector2(this.x - v.x, this.y - v.y);
    }
  
    multiply(scalar: number): Vector2 {
        return new Vector2(this.x * scalar, this.y * scalar);
    }
  
    squareMagnitude(): number {
        return (this.x * this.x + this.y * this.y);
    }
    magnitude(): number {
        return Math.sqrt(this.squareMagnitude());
    }
  
    normalize(): Vector2 {
        const mag = this.magnitude();
        return mag === 0 ? new Vector2() : new Vector2(this.x / mag, this.y / mag);
    }
}
export default Vector2;
  