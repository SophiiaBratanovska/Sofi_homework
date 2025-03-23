import { expect } from 'chai';
import { ISwitchable } from '../lesson9-oop-solid/src/i-switchable';
import { Lamp } from '../lesson9-oop-solid/src/lamp';
import { SmartLamp } from '../lesson9-oop-solid/src/smart-lamp';
import { controlLight } from '../lesson9-oop-solid/src/control-light';

describe('Lamp', function () {
    let lamp: Lamp;

    beforeEach(() => {
        lamp = new Lamp();
    });

    it('should turn on the lamp', function () {
        lamp.turnOn();
        expect(lamp.getIsOn()).to.be.true;
    });

    it('should turn off the lamp', function () {
        lamp.turnOn();
        lamp.turnOff();
        expect(lamp.getIsOn()).to.be.false;
    });
});

describe('SmartLamp', function () {
    let smartLamp: SmartLamp;

    beforeEach(() => {
        smartLamp = new SmartLamp();
    });

    it('should turn on the smart lamp', function () {
        smartLamp.turnOn();
        expect(smartLamp.getIsOn()).to.be.true;
    });

    it('should turn off the smart lamp', function () {
        smartLamp.turnOn();
        smartLamp.turnOff();
        expect(smartLamp.getIsOn()).to.be.false;
    });

    it('should set brightness between 0 and 100', function () {
        smartLamp.setBrightness(50);
        expect(smartLamp.getBrightness()).to.equal(50);

        smartLamp.setBrightness(-10);
        expect(smartLamp.getBrightness()).to.equal(0);

        smartLamp.setBrightness(120);
        expect(smartLamp.getBrightness()).to.equal(100);
    });

    it('should set color correctly', function () {
        smartLamp.setColor('blue');
        expect(smartLamp.getColor()).to.equal('blue');
    });
});

describe('controlLight function', function () {
    this.timeout(5000);
    it('should turn on and then turn off the device after 2 seconds', async function () {
        class TestDevice implements ISwitchable {
            public isOn = false;

            public turnOn(): void {
                this.isOn = true;
            }

            public turnOff(): void {
                this.isOn = false;
            }
        }

        const device = new TestDevice();
        controlLight(device);

        expect(device.isOn).to.be.true;
        await new Promise((resolve) => setTimeout(resolve, 2100));
        expect(device.isOn).to.be.false;
    });
});
