import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateTimeDifferential = (timeMachine:TimeMachine) => {
   

    const Balance = calculateTimeBalance(timeMachine);


     const TimeDifferential = Balance.year *365*24+ Balance.month*30*24+Balance.day*24

    


    return TimeDifferential;
}

export default calculateTimeDifferential;
