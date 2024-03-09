import React from 'react';
import './VolunteerCard.css'
function VolunteerCard() {
  return (
    <div className="card">
      <div className="first-content">
        <span>Full Name </span>
      </div>
      <div className="second-content">
        <span>
            Full Name <br/>
            contact <br/>
            Location
        </span>
        
      </div>
    </div>
  );
}

export default VolunteerCard;
