import React from "react";
import { 
  Menu, 
  Layout, 
  Button, 
  Badge, 
  Space, 
  Typography,
  Image 
} from 'antd';
import {
  HomeOutlined,
  ProjectOutlined,
  StarOutlined,
  PictureOutlined,
  TeamOutlined,
  BulbOutlined,
  SolutionOutlined
} from '@ant-design/icons';
import logoImg from "../images/logo.webp";

const { Header } = Layout;
const { Text } = Typography;

const navItems = [
  { 
    key: 'home',
    label: 'Home',
    icon: <HomeOutlined />,
    href: '#'
  },
  { 
    key: 'projects',
    label: 'Projects',
    icon: <ProjectOutlined />,
    href: '#'
  },
  { 
    key: 'values',
    label: 'Core Values',
    icon: <StarOutlined />,
    href: '#'
  },
  { 
    key: 'gallery',
    label: 'Gallery',
    icon: <PictureOutlined />,
    href: '#'
  },
  { 
    key: 'who-we-are',
    label: 'Who We Are',
    icon: <TeamOutlined />,
    href: '#'
  },
  { 
    key: 'guiding-force',
    label: 'Our Guiding Force',
    icon: <BulbOutlined />,
    href: '#'
  },
  { 
    key: 'careers',
    label: (
      <Space>
        Careers
        <Badge count="New" style={{ backgroundColor: '#52c41a' }} />
      </Space>
    ),
    icon: <SolutionOutlined />,
    href: '#',
    type: 'primary'
  }
];

const Navbar = () => {
  return (
    <Header style={{
      position: 'sticky',
      top: 0,
      zIndex: 2,
      // width: '100%',
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '0 24px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginRight: '24px'
      }}>
        <Image
          src={logoImg}
          alt="Sant Nirankari Charitable Foundation Logo"
          preview={false}
          width={120}
        />
      </div>
      
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          flex: 1,
          minWidth: 0,
          borderBottom: 'none',
          justifyContent: 'flex-end'
        }}
        items={navItems.map(item => ({
          key: item.key,
          label: (
            <a href={item.href} style={{ color: 'inherit' }}>
              {item.label}
            </a>
          ),
          icon: item.icon,
          style: item.type === 'primary' ? { 
            // background: '#1890ff',
            color: '#fff',
            borderRadius: '4px',
            marginLeft: '8px'
          } : {}
        }))}
      />
    </Header>
  );
};

export default Navbar;