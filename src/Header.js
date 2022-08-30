import React from 'react'
import "./Header.css";
import Person4Icon from '@mui/icons-material/Person4';
import { IconButton} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className='header'>
        <IconButton><Person4Icon fontSize="large" className="header__icon"/></IconButton>
        <img
          className='header__logo'
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-3.png"  
          alt="X"
        />
        <IconButton><ForumIcon fontSize="large" className='header__icon'/></IconButton>
    </div>
  )
}

export default Header