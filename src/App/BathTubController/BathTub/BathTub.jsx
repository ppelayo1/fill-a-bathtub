
import { useEffect, useState } from 'react';
import './BathTub.scss';




function BathTub({waterLevel}) {
    const [waterDivs, setWaterDivs] = useState([]);
    
    //add the divs
    useEffect(()=>{
        let jsx = [];
        
        for(let i = 0; i < waterLevel; i++){
            let div = <div className="water" key={i}/>
            jsx.push(div);
        }
        setWaterDivs(jsx);
        
    },[waterLevel]);
    
    return (
      <div className="BathTub">
          {waterDivs}
      </div>
    );
  }
  
  export default BathTub;