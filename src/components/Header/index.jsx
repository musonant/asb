import React from 'react';
import './styles.scss';
import logo from '../../assets/icons/logo.svg';
import bellIcon from '../../assets/icons/bell.svg';
import caretDownIcon from '../../assets/icons/caret-down.svg';
import HomeIcon from '../SVGIcons/Home';
import EntriesIcon from '../SVGIcons/Entries';
import DivisionsIcon from '../SVGIcons/Divisions';
import MenuLinkItem from '../MenuLinkItem';
import SearchBar from '../SearchBar';
import Avatar from '../Avatar';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-area">
        <img src={logo} alt="app logo" />
        <h1>FE Engineer Test 1</h1>
      </div>
      <nav className="links">
        <MenuLinkItem icon={HomeIcon} label="Home" />
        <MenuLinkItem icon={EntriesIcon} label="Entries" />
        <MenuLinkItem icon={DivisionsIcon} active label="Divisions" />
      </nav>
      <div className="header-actions">
        <SearchBar />
        <a className="notification" href="/">
          <img src={bellIcon} alt="" />
        </a>
        <a className="avatar-button" href="/">
          <Avatar />
          <img className="caret-icon" src={caretDownIcon} alt="" />
        </a>
      </div>
    </header>
  )
};

export default Header;
