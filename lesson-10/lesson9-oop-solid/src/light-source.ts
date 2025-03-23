import { ISwitchable } from './i-switchable';

export abstract class LightSource implements ISwitchable {
    protected isOn = false;

    public turnOn(): boolean {
        this.isOn = true;
        console.log(`${this.constructor.name} is On`);
        return this.isOn;
    }

    public turnOff(): boolean {
        this.isOn = false;
        console.log(`${this.constructor.name} Off`);
        return this.isOn;
    }

    public getIsOn(): boolean {
        return this.isOn;
    }
}
