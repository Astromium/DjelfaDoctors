import React from 'react';

function Doctor(props) {
  return (
    <div className='card mb-4 doctor-card'>
      <h3
        className='card-header text-light bg-info'
        style={{
          textAlign: 'center',
          padding: '2rem',
          fontWeight: 700
        }}
      >
        {props.name}
      </h3>

      <div>
        <div className='card-body bg-dark text-light border-bottom'>
          <h4 style={{ textAlign: 'right' }}> العنوان : {props.adress}</h4>
        </div>
        <div className='card-body bg-dark text-light'>
          <h4 style={{ textAlign: 'right' }}> الرقم : {props.phone}</h4>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
