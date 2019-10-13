import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import '../css/fields.css';

function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            <i className='fas fa-user-md' style={{ color: '#5bc0de' }}></i>{' '}
            &nbsp; <span className='text-info'>أطباء</span> الجلفة
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarMain'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarMain'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item '>
                <Link to='/' className='nav-link text-light'>
                  <i className='fas fa-home'> </i>&nbsp; الرئيسية{' '}
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle text-light'
                  to='/'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <i className='fas fa-share-alt'></i>&nbsp; مشاركة{' '}
                </Link>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <FacebookShareButton
                    className='dropdown-item'
                    url='astromium.github.io/prayertimes'
                    image='/home/ayoub/prayer-times/public/mosque.png'
                    style={{ cursor: 'pointer' }}
                  >
                    <i className='fab fa-facebook'></i>&nbsp; عبر فيسبوك
                  </FacebookShareButton>
                  <TwitterShareButton
                    className='dropdown-item'
                    title='Prayer Times app'
                    via='Ayoub Belouadah'
                    style={{ cursor: 'pointer' }}
                    url='astromium.github.io/prayertimes'
                  >
                    <i className='fab fa-twitter'></i>&nbsp; عبر تويتر
                  </TwitterShareButton>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle text-light'
                  to='/'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <i className='fas fa-address-book'></i>&nbsp; تواصل معنا{' '}
                </Link>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a
                    className='dropdown-item'
                    href='https://www.facebook.com/Son.Ayoub.Messi'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-facebook'></i>&nbsp; Ayoub Belouadah
                  </a>
                  <a
                    className='dropdown-item'
                    href='https://github.com/Astromium'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-github'></i>&nbsp; Astromium
                  </a>

                  <a
                    className='dropdown-item'
                    href='https://twitter.com/ayoub_belouadah'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-twitter'></i>&nbsp; @ayoub_belouadah
                  </a>
                </div>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link text-light'>
                  <i className='fas fa-cog'></i>&nbsp; حول التطبيق
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
