import { LightSource } from "./LightSource";

export class SmartLamp extends LightSource {
    private brightness: number = 100;
    private color: string = "white";

    setBrightness(level: number): void {
        this.brightness = Math.max(0, Math.min(100, level));
        console.log(`Brightness ${this.brightness}%.`);
    }

    setColor(color: string): void {
        this.color = color;
        console.log(`Color ${this.color}.`);
    }
}