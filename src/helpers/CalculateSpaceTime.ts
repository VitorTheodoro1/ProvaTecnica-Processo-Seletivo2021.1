import SimpleDate from "../interfaces/SimpleDate";
import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateSpaceTime = (timeMachine:TimeMachine) => {
    
    const balance = calculateTimeBalance(timeMachine);

    const SpaceTime = Math.sqrt(balance.year**2 + balance.month**2 +balance.day**2);

    return SpaceTime;
}

export default calculateSpaceTime;
