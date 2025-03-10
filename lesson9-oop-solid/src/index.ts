import { Lamp } from "./Lamp";
import { SmartLamp } from "./SmartLamp";
import { controlLight } from "./controlLight";

const regularLamp = new Lamp();
const smartLamp = new SmartLamp();

controlLight(regularLamp);
controlLight(smartLamp);

smartLamp.setBrightness(50);
smartLamp.setColor("blue");