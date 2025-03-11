import { LightSource } from "./light-source";

export class SmartLamp extends LightSource {
    private brightness: number = 100;
    private color: string = "white";

    public setBrightness(level: number): void {
        this.brightness = Math.max(0, Math.min(100, level));
        console.log(`Brightness ${this.brightness}%.`);
    }

    public setColor(color: string): void {
        this.color = color;
        console.log(`Color ${this.color}.`);
    }
}