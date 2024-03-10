import React from 'react';
import './VolunteerCard.css'
function VolunteerCard({prop}) {
  return (
    <div className="card">
      <div className="first-content text-center">
        <span>{prop.name}<br/>
        {prop.location} 

        </span>
      </div>
      <div className="second-content">
        <span>
            {prop.name}<br/>
            {prop.number} <br/>
            {prop.location} 
        </span>
        
      </div>
    </div>
  );
}

export default VolunteerCard;
