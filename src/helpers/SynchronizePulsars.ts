import SimpleDate from "../interfaces/SimpleDate";
import SpacePoint from "../interfaces/SpacePoint";
import { TimeMachine } from "../entities/TimeMachine";
import calculateSpaceTime from "./CalculateSpaceTime";

const synchronizePulsars = (timeMachine:TimeMachine) => {

    const SpaceTime = calculateSpaceTime(timeMachine);
    
    const synchronizePulsars = Math.sqrt((timeMachine.currentPosition.x ** 2)+(timeMachine.currentPosition.y ** 2)+((timeMachine.currentPosition.z ** 2)/SpaceTime));
    
    return synchronizePulsars;
}

export default synchronizePulsars;
