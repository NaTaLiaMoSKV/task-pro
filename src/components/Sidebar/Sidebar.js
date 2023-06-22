import React from 'react';
import './Sidebar.css';

import logoImage from '../../images/logo.png'
import logoutImage from '../../images/logout.png'
import plusImage from '../../images/plus.png'
import cactusImage from '../../images/cactus.png'
import helpImage from '../../images/help.png'

export default function Sidebar () {
  return (
      <div className="sidebar">
          <div>
            <div className='logo'>
                <img className='logo-icon' src={logoImage} alt='logo' />
                <p className='logo-title'>Task Pro</p>
            </div>
            <p className='my-boards__text'>My boards</p>
            <div className='create-board'>
                <p className='create-board__text'>Create a new board</p>
                <button className='create-board__button'><img className='create-board__icon' alt='Create a new boards' src={plusImage} /></button>
            </div>  
          </div>
          
          <div>
                <div className='help'>
                    <img alt='Cactus' src={cactusImage} className='help__image'/>
                    <p className='help__text'>If you need help with TaskPro, check out our support resources or reach out to our customer support team.</p>
                    <div className='need-help'>
                      <img alt='Need help?' src={helpImage} className='need-help__icon' />
                      <p className='need-help__text'>Need help?</p>
                    </div>
                </div>  
                <div className='logout'>
                    <img className='logout-icon' src={logoutImage} alt='logout' />
                    <p className='logout-title'>Log out</p>
                </div>
          </div>
        
    </div>
  );
};
