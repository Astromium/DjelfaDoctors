import React from 'react';
//import image from '../images/millennium-falcon-star-wars-minimalist-digital-art-uhdpaper.com-hd-27.jpg';
import { Link } from 'react-router-dom';

function Field(props) {
  const path = `/doctors/${props.route}`;
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <div
        className='card field-card mb-2'
        style={{ width: '12rem', cursor: 'pointer' }}
      >
        <img src={props.image} alt='' className='card-img-top' />
        <div className='card-body field-card-body'>
          <h5
            className='card-title field-card-title'
            style={{
              textAlign: 'center',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            {props.title}
          </h5>
        </div>
      </div>
    </Link>
  );
}

export default Field;
