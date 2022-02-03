
import { useState } from 'react';
import './WaterController.scss';

const fillTime= 2000;

const increaseWaterHandler = ({active,setWaterLevel, waterLevel, setActive}) => {

  if(!active && waterLevel === 0){
    let i = 0;
    setActive(true);
    const interval = setInterval(() => {
      setWaterLevel((wl)=>{
        return wl + 1;
      })
      if(i === 4){
        setActive(false);
        clearInterval(interval);
      }
      i++;
    }, fillTime);
  }
}

const decreaseWaterHandler = ({active,setWaterLevel, waterLevel, setActive}) => {

  if(!active && waterLevel === 5){
    setActive(true);
    let i = 5;
    const interval = setInterval(() => {
      setWaterLevel((wl)=>{
        return wl - 1;
      })
      if(i === 1){
        setActive(false);
        clearInterval(interval);
      }
      i--;
    }, fillTime);
  }
}

function WaterController({setWaterLevel, waterLevel}) {
  const [active, setActive] = useState(false);

  const args = {active,setWaterLevel,waterLevel,setActive};

    return (
      <div className="WaterController">
          <button type="button" 
            onClick={()=>{increaseWaterHandler(args)}}>
              increase water level
          </button>

          <button type="button" 
            onClick={()=>{decreaseWaterHandler(args)}}>
              decrease water level
          </button>

          <div className="counter">
            {`Height ${waterLevel}`}
          </div>
      </div>
    );
  }
  
  export default WaterController;