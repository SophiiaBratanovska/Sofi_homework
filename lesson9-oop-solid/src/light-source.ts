import { ISwitchable } from "./i-switchable";

export abstract class LightSource implements ISwitchable {
    protected isOn: boolean = false;
    
    public turnOn(): void {
        this.isOn = true;
        console.log(`${this.constructor.name} is On`);
    }
    
    public turnOff(): void {
        this.isOn = false;
        console.log(`${this.constructor.name} Off`);
    }
}