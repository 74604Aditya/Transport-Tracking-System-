// Menu.jsx
import React, { useEffect } from 'react';
import './Navbar.css';

const Menu = () => {
  useEffect(() => {
    const handleMenuClick = () => {
      const menu = document.querySelector('.navbar .menu');
      const menuBtnIcon = document.querySelector('.navbar .menu-btn i');

      if (menu && menuBtnIcon) {
        menu.classList.toggle('active');
        menuBtnIcon.classList.toggle('active');
      }
    };

    const handleMenuItemClick = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    document.addEventListener('DOMContentLoaded', () => {
      const menuBtn = document.querySelector('.navbar .menu-btn');
      const menuItems = document.querySelectorAll('.navbar .menu li a');

      if (menuBtn) {
        menuBtn.addEventListener('click', handleMenuClick);
      }

      menuItems.forEach((item) => {
        item.addEventListener('click', handleMenuItemClick);
      });
    });

    return () => {
      // Cleanup event listeners if needed
      document.removeEventListener('DOMContentLoaded', () => {
        const menuBtn = document.querySelector('.navbar .menu-btn');
        const menuItems = document.querySelectorAll('.navbar .menu li a');

        if (menuBtn) {
          menuBtn.removeEventListener('click', handleMenuClick);
        }

        menuItems.forEach((item) => {
          item.removeEventListener('click', handleMenuItemClick);
        });
      });
    };
  }, []);

  // Render some JSX here
  return (
    <div>
      {/* Your menu JSX goes here */}
    </div>
  );
};

export default Menu;
