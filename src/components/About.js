import React from 'react';
import image from '../images/undraw_medicine_b1ol.svg';

function About() {
  return (
    <div>
      <div
        className='container'
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <h2 className='text-dark' style={{ textAlign: 'center' }}>
          <i className='fas fa-user-md' style={{ color: '#5bc0de' }}></i>&nbsp;
          أطباء <span className='text-info'>الجلفة</span>
        </h2>
        <h5 className='text-secondary' style={{ textAlign: 'center' }}>
          Version 1.0.0
        </h5>
        <h4 style={{ textAlign: 'center', marginTop: '2rem', width: '80%' }}>
          تطبيق يشمل معظم أطباء مدينة الجلفة ليسهل عملية البحث عنهم عن طريق
          توفير العنوان و الرقم الخاص بكل طبيب
        </h4>
        <img
          className='img-fluid mt-2'
          src={image}
          alt='doctors'
          width='80%'
          height='80%'
        />
        <h5 style={{ textAlign: 'center', padding: '1.5rem' }}>
          Made with <i className='fas fa-heart' style={{ color: 'red' }}></i> &{' '}
          <i className='fas fa-coffee' style={{ color: '#cd6133' }}></i> By
          <span style={{ fontWeight: 700, width: '100%' }}>
            &nbsp;Ayoub Belouadah
          </span>
        </h5>
      </div>
    </div>
  );
}

export default About;
