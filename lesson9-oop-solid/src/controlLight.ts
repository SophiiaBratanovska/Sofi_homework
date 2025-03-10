import { Switchable } from "./Switchable";

export function controlLight(device: Switchable): void {
    device.turnOn();
    setTimeout(() => device.turnOff(), 2000); 
}