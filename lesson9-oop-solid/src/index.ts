import { Lamp } from "./Lamp";
import { SmartLamp } from "./smart-lamp";
import { controlLight } from "./control-light";

const regularLamp = new Lamp();
const smartLamp = new SmartLamp();

controlLight(regularLamp);
controlLight(smartLamp);

smartLamp.setBrightness(50);
smartLamp.setColor("blue");