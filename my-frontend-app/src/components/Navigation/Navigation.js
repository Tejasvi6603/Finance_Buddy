import React from 'react';
import avatar from '../../image/avatar.png';
import { signout } from '../../utils/icons';
import { menuItems } from '../../utils/menuitems';
import { useHistory } from 'react-router-dom';


import './Navigation.css';

function Navigation({ active, setActive }) {

  const history=useHistory();

  const handleSignOut = () => {
    history.push('/startpage');
  };

  return (
    <nav className='nav'>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Buddy</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="bottom-nav">
        <li onClick={handleSignOut}>{signout} Sign Out</li>
      </div>
    </nav>
  );
}

export default Navigation;
