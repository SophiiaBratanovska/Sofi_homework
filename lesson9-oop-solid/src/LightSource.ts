import { Switchable } from "./Switchable";

export abstract class LightSource implements Switchable {
    protected isOn: boolean = false;
    
    turnOn(): void {
        this.isOn = true;
        console.log(`${this.constructor.name} is On`);
    }
    
    turnOff(): void {
        this.isOn = false;
        console.log(`${this.constructor.name} Off`);
    }
}