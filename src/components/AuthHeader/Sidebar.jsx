// Sidebar.js
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {AiOutlineMenuFold,AiOutlineMenuUnfold} from "react-icons/ai"
import { FaChartBar, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./styles.css"
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}



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

const items = [
  getItem("Dashbord", "1", <Link to={"/login"}> <PieChartOutlined /> </Link>),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
];

function Sidebar() {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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
          <AiOutlineMenu />
        </a>
      </Dropdown>
    );
  };

  return (
    <div
      // style={{
      //   width: 256,
      // }}
      className=""
    >
      <div className="hidden sm:block p-5 ">
        <div className="flex justify-center">

        <h1 className="text-3xl mb-5 font-bold">Jimila</h1>
        </div>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
          className="bg-black self-end "
        >
          {collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
      <div className="bg-yellow-500 block sm:hidden">
        <div className="-mr-2 -my-2 md:hidden p-10 flex justify-end">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
