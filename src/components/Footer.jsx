import React from "react";
import { Layout, Row, Col, Typography, Space, Button, Divider } from "antd";
import { FaFacebookF, FaYoutube, FaInstagram, FaRss } from "react-icons/fa";
import { ArrowUpOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import xIcon from "../assets/xicon.png";
import theme from "../theme/themeConfig";

const { Footer } = Layout;
const { Title, Text } = Typography;

const themeColors = {
  primary: "#0ABAB5",
  secondary: "#56DFCF",
  accent: "#ADEED9",
  pink: "#FFEDF3",
  textDark: "#1c276d",
  textSecondary: "#777",
  background: "#f9fafa",
};

const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook", color: "#4267B2" },
  {
    icon: <img src={xIcon} alt="X" style={{ width: "1em", height: "1em", verticalAlign: "middle" }} />,
    href: "#",
    label: "X",
    color: "#000000"
  },
  { icon: <FaYoutube />, href: "#", label: "YouTube", color: "#FF0000" },
  { icon: <FaInstagram />, href: "#", label: "Instagram", color: "#C13584" },
  { icon: <FaRss />, href: "#", label: "RSS", color: "#FFA500" },
];

const CustomFooter = () => (
  <Footer
    style={{
      background: themeColors.background,
      borderTop: `6px solid ${themeColors.primary}`,
      borderRadius: "32px 32px 0 0",
      padding: "64px 24px 24px 24px",
      position: "relative",
    }}
  >
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <Row gutter={[48, 32]} justify="center" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Column 1 - Quick Links */}
        <Col xs={24} md={8}>
        
          <Title level={5} style={{ color: themeColors.textDark, marginBottom: 24 }}>Quick Links</Title>
          <Space direction="vertical" size="small">
            {["Contact", "Social Media Guidelines", "Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: themeColors.textSecondary,
                  textDecoration: "none",
                  fontSize: 14,
                }}
              >
                {item}
              </a>
            ))}
          </Space>
        </Col>

        {/* Column 2 - Useful Links */}
        <Col xs={24} md={8}>
          <Title level={5} style={{ color: themeColors.textDark, marginBottom: 24 }}>Useful Links</Title>
          <Space direction="vertical" size="small">
            {["Awards and Honors", "Our Partners", "Foreign Contributions", "Contribute"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: themeColors.textSecondary,
                  textDecoration: "none",
                  fontSize: 14,
                }}
              >
                {item}
              </a>
            ))}
          </Space>
        </Col>

        {/* Column 3 - Social + Organization Info */}
        <Col xs={24} md={8}>
          <Title level={5} style={{ color: themeColors.textDark, marginBottom: 24 }}>Connect With Us</Title>
          <Space size="middle" style={{ marginBottom: 16 }}>
            {socialLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: item.color,
                  fontSize: 18,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                {item.icon}
              </motion.a>
            ))}
          </Space>

          <div style={{ textAlign: "left", marginTop: 16 }}>
            <a
              href="https://www.nirankari.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: themeColors.primary,
                fontWeight: "bold",
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Sant Nirankari Mission
            </a>

            <Text type="secondary" style={{ display: "block", fontSize: 13, marginTop: 4 }}>
              &copy; 2010 - {new Date().getFullYear()} | Sant Nirankari Charitable Foundation
            </Text>

            <Space style={{ marginTop: 12 }}>
              <a href="#" style={{ color: themeColors.primary, fontSize: 14, textDecoration: "none" }}>
                Sitemap
              </a>
              <Button type="primary" size="small" href="#" style={{ background: themeColors.primary, border: "none" }}>
                Donate
              </Button>
            </Space>
          </div>
        </Col>
      </Row>
    </motion.div>

    {/* Scroll to Top */}
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.6, type: "spring" }}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 1000,
      }}
    >
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<ArrowUpOutlined />}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          boxShadow: `0 4px 16px ${themeColors.primary}66`,
          background: themeColors.primary,
          color: "#fff",
          border: "none",
        }}
        aria-label="Scroll to top"
      />
    </motion.div>
  </Footer>
);

export default CustomFooter;
