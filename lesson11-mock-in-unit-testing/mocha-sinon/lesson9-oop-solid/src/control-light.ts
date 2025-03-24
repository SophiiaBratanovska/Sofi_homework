import { ISwitchable } from './i-switchable';

export function controlLight(device: ISwitchable): void {
    device.turnOn();
    setTimeout(() => device.turnOff(), 2000);
}
