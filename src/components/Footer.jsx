import React from "react";
import { Layout, Row, Col, Typography, Space, Button } from "antd";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaRss } from "react-icons/fa";
import { ArrowUpOutlined } from "@ant-design/icons";
import snmLogo from "../images/logo.webp";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const CustomFooter = () => (
  <Footer style={{  padding: "40px 20px" }}>
    {/* Top Links Section */}
    <Row gutter={[32, 24]} justify="space-between">
      <Col xs={24} md={12}>
        <Title level={4}>Quick Links</Title>
        <Space direction="vertical">
          <Link href="#">Contact</Link>
          <Link href="#">Social Media – Some Guidelines</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </Space>
      </Col>
      <Col xs={24} md={12}>
        <Title level={4}>Useful Links</Title>
        <Space direction="vertical">
          <Link href="#">Award and Honors</Link>
          <Link href="#">Our Partners</Link>
          <Link href="#">Foreign Contributions</Link>
          <Link href="#">Contribute</Link>
        </Space>
      </Col>
    </Row>

    {/* Bottom Section */}
    <Row justify="space-between" align="middle" style={{ marginTop: "40px", flexWrap: "wrap" }}>
      <Col>
        <Space size="middle">
          <a href="#" aria-label="Facebook"><FaFacebookF size={20} /></a>
          <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
          <a href="#" aria-label="YouTube"><FaYoutube size={20} /></a>
          <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
          <a href="#" aria-label="RSS"><FaRss size={20} /></a>
        </Space>
      </Col>
      <Col>
        <Text>&copy; 2010 | Sant Nirankari Charitable Foundation</Text>
      </Col>
      <Col>
        <Space>
          <img src={snmLogo} alt="Sant Nirankari Mission" style={{ height: "40px" }} />
          <Text>Sant Nirankari Mission</Text>
        </Space>
      </Col>
    </Row>

    {/* Scroll to Top Button */}
    <Button
      type="default"
      shape="circle"
      size="large"
      icon={<ArrowUpOutlined />}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ position: "fixed", bottom: 20, right: 20 }}
    />
  </Footer>
);

export default CustomFooter;
