import React from 'react';
import SideMenuElement from '../SideMenuElement/SideMenuElement';
import './SideMenuContainer.scss';

const SideMenuContainer = () => {
  const pages = ['Home', 'Team', 'Member'];
  return (
    <div className="SideMenuContainer">
      {pages.map(page => (
        <SideMenuElement
          name={page}
          link={page === 'Home' ? '/' : page.toLowerCase()}
        />
      ))}
    </div>
  );
};

export default SideMenuContainer;
