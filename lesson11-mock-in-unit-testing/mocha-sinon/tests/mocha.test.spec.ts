import { expect } from 'chai';
import sinon, { SinonSpy, SinonFakeTimers } from 'sinon';
import { controlLight } from '../lesson9-oop-solid/src/control-light';
import { ISwitchable } from '../lesson9-oop-solid/src/i-switchable';

describe('controlLight function (with Sinon fake timers)', function () {
    let clock: SinonFakeTimers;
    let testDevice: ISwitchable;
    let turnOnSpy: SinonSpy;
    let turnOffSpy: SinonSpy;

    beforeEach(() => {
        clock = sinon.useFakeTimers();
        turnOnSpy = sinon.spy();
        turnOffSpy = sinon.spy();

        testDevice = {
            turnOn: turnOnSpy,
            turnOff: turnOffSpy
        };
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should turn on the device immediately', function () {
        controlLight(testDevice);
        expect(turnOnSpy.calledOnce).to.be.true;
    });

    it('should turn off the device after 2 seconds', function () {
        controlLight(testDevice);
        clock.tick(2000);
        expect(turnOffSpy.calledOnce).to.be.true;
    });

    it('should not turn off the device before 2 seconds', function () {
        controlLight(testDevice);
        clock.tick(1000);
        expect(turnOffSpy.called).to.be.false;
    });

    it('should turn on and off exactly once', function () {
        controlLight(testDevice);
        clock.tick(2000);
        expect(turnOnSpy.calledOnce).to.be.true;
        expect(turnOffSpy.calledOnce).to.be.true;
    });

    it('should not turn off the device if it was not turned on', function () {
        clock.tick(2000);
        expect(turnOffSpy.called).to.be.false;
    });
});
