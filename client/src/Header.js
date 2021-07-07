import React from 'react';

function Header({approvers, quorum}) {
  return (
<div className="float-sm-left">
      <div className="bg-container container border rounded-3" >
      <ul>
        
        Approvers:
        {approvers.map((item =>
          <li className="" >{item}</li>
          ))}
        
        <li>Quorum: {quorum}</li>
      </ul>
      
      </div>
      <br />
      </div>

  );
}

export default Header;
