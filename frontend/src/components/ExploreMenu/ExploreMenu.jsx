import React, { useState, useEffect } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const handleSetCategory = (item) => {
    setCategory(prev => {
      const newCategory = prev === item.menu_name ? 'All' : item.menu_name;
      console.log('Category changed to:', newCategory);
      return newCategory;
    });
  };

  useEffect(() => {
    console.log('Current category:', category);
    console.log('Menu list:', menu_list);
  }, [category]);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from your diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and your dining experience, one delicious meal at a time.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => handleSetCategory(item)}
              key={index}
              className='explore-menu-list-item'
            >
              <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
