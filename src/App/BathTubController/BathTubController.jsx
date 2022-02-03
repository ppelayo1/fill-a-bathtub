
import './BathTubController.scss';
import BathTub from './BathTub/BathTub';
import WaterController from './WaterController/WaterController';
import { useState } from 'react';

function BathTubController() {
  const [waterLevel, setWaterLevel] = useState(0);

    return (
      <div className="BathTubController">
        <BathTub waterLevel={waterLevel}/>
        <WaterController 
          waterLevel={waterLevel} 
          setWaterLevel={setWaterLevel}
        />
      </div>
    );
  }
  
  export default BathTubController;