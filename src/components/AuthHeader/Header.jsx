// Header.js
import { Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const Header = () => {

    const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  const mobile = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  const MobileMenu = () => {
    const menu = (
      <Menu>
        {mobile.map((item) =>
          item.type === "divider" ? (
            <Menu.Divider key={item.key} />
          ) : (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          )
        )}
      </Menu>
    );
  
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a href="/" onClick={(e) => e.preventDefault()}>
          <MdAccountCircle size={32} />
        </a>
      </Dropdown>
    );
  };


  return (
    <header className=" p-4 sm:p-2 hidden sm:flex sm:justify-end sm:pr-12 sm:items-center sm:gap-3">
      {/* Header content goes here */}
      <h1>
        Assegid Assefa
      </h1>
      <MobileMenu/>
    </header>
  );
};

export default Header;
