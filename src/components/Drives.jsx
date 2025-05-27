import React from 'react';
import { Button, Card, Row, Col, Typography, Space } from 'antd';
import { ConfigProvider } from 'antd';
import theme from '../theme/themeConfig'; // Adjust path as needed

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell,
} from 'recharts';

import projectImg from '../images/blood2.jpg';
import blogImg1 from '../images/blood.jpeg';
import blogImg2 from '../images/blood.jpeg';
import blogImg3 from '../images/blood.jpeg';

const { Title, Paragraph } = Typography;

const donationData = [
  { name: '2019', donations: 500 },
  { name: '2020', donations: 750 },
  { name: '2021', donations: 1200 },
  { name: '2022', donations: 1500 },
  { name: '2023', donations: 1800 },
  { name: '2024', donations: 2200 },
];

const bloodTypeData = [
  { name: 'Type A', value: 350 },
  { name: 'Type B', value: 280 },
  { name: 'Type O', value: 420 },
  { name: 'Type AB', value: 150 },
];

const COLORS = ['#E91E63', '#9C27B0', '#673AB7', '#3F51B5'];

const Drives = () => (
  <ConfigProvider theme={theme}>
    <div style={{ fontFamily: theme.token.fontFamily, background: theme.token.colorBgLayout, minHeight: '100vh' }}>
      {/* Hero Section */}
      <Card
        style={{
          background: theme.token.colorBgElevated,
          margin: '24px auto',
          maxWidth: 1200,
          borderRadius: theme.token.borderRadius,
          textAlign: 'center'
        }}
        bodyStyle={{ padding: 48 }}
      >
        <Title level={2} style={{ color: theme.token.colorPrimary, marginBottom: 0 }}>Blood Donation Drive</Title>
        <Title style={{ margin: '16px 0', color: theme.token.colorHighlight, fontWeight: 700 }}>
          Empower Lives: Join Our Mission
        </Title>
        <Paragraph style={{ color: theme.token.colorTextSecondary }}>
          Together, we can bring hope and change to countless lives.
        </Paragraph>
        <Button type="primary" size="large" style={{ marginTop: 16 }}>
          Join with Us
        </Button>
      </Card>

      {/* Stats Section */}
      <Row gutter={[24, 24]} justify="center" style={{ maxWidth: 1200, margin: '0 auto 32px' }}>
        <Col xs={24} sm={8}>
          <Card bordered={false} style={{ textAlign: 'center', borderRadius: theme.token.borderRadius }}>
            <Title level={3} style={{ color: theme.token.colorPrimary }}>1200+</Title>
            <Paragraph>Donations Received</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card bordered={false} style={{ textAlign: 'center', borderRadius: theme.token.borderRadius }}>
            <Title level={3} style={{ color: theme.token.colorPrimary }}>800+</Title>
            <Paragraph>Pints of Blood Collected</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card bordered={false} style={{ textAlign: 'center', borderRadius: theme.token.borderRadius }}>
            <Title level={3} style={{ color: theme.token.colorPrimary }}>500+</Title>
            <Paragraph>Happy Recipients</Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Graph Section */}
      <Card
        style={{
          maxWidth: 1200,
          margin: '0 auto 32px',
          borderRadius: theme.token.borderRadius,
        }}
        title={<Title level={3} style={{ margin: 0 }}>Donation Impact Overview</Title>}
      >
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card bordered={false} title="Yearly Donation Trends">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={donationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="donations" stroke="#E91E63" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} title="Donation Statistics">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={donationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="donations" fill="#9C27B0" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} title="Blood Type Distribution">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={bloodTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#673AB7"
                    dataKey="value"
                    label
                  >
                    {bloodTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Project Details Section */}
      <Row gutter={[24, 24]} style={{ maxWidth: 1200, margin: '0 auto 32px' }} align="middle">
        <Col xs={24} md={14}>
          <Card bordered={false} style={{ borderRadius: theme.token.borderRadius }}>
            <Title level={3}>About Project</Title>
            <Paragraph>
              Our blood donation project is dedicated to building a healthier future by ensuring a constant and safe blood supply for hospitals and patients. 
              Through organized blood drives, community outreach programs, and partnerships with healthcare organizations, we aim to bridge the gap between blood donors and those in urgent need.
            </Paragraph>
            <Paragraph>
              We focus not only on collecting blood but also on raising awareness about the importance of regular donation. 
              Our initiatives are designed to make the donation process easy, transparent, and rewarding, fostering a community of regular donors committed to saving lives.
            </Paragraph>
            <Paragraph>
              By engaging volunteers, educating youth, and utilizing technology, we strive to create a sustainable model where timely blood availability becomes a reality for everyone.
              Join us in this life-saving mission — every drop counts, every donor matters.
            </Paragraph>
            <Button type="link" href="#video-section" style={{ padding: 0 }}>Read More</Button>
          </Card>
        </Col>
        <Col xs={24} md={10}>
          <img src={projectImg} alt="Project" style={{ width: '100%', borderRadius: theme.token.borderRadius, boxShadow: theme.components.Card.boxShadow }} />
        </Col>
      </Row>

      {/* Blogs Section */}
      <Card
        style={{
          maxWidth: 1200,
          margin: '0 auto 32px',
          borderRadius: theme.token.borderRadius,
        }}
        title={<Title level={3} style={{ margin: 0 }}>Latest Updates</Title>}
      >
        <Row gutter={[24, 24]}>
          {[blogImg1, blogImg2, blogImg3].map((img, idx) => (
            <Col xs={24} md={8} key={idx}>
              <Card
                hoverable
                cover={<img alt={`Blog ${idx + 1}`} src={img} style={{ height: 180, objectFit: 'cover' }} />}
                style={{ borderRadius: theme.token.borderRadius }}
              >
                <Title level={4} style={{ marginBottom: 8 }}>
                  {[
                    'Successful Blood Donation Drive in Rural Area',
                    'Partnership with Local Hospital to Improve Blood Storage',
                    'New Awareness Campaign Launched to Encourage Youth Donations'
                  ][idx]}
                </Title>
                <Paragraph type="secondary" style={{ marginBottom: 4 }}>
                  {['April 26, 2025', 'April 20, 2025', 'April 15, 2025'][idx]}
                </Paragraph>
                <Paragraph>
                  {[
                    'Our recent blood donation drive in a rural community collected over 100 units of blood, significantly boosting local supplies.',
                    "We've partnered with a leading hospital to implement advanced blood storage solutions, ensuring longer shelf life and better quality.",
                    'Our new campaign targets young adults to raise awareness about the importance of regular blood donations.'
                  ][idx]}
                </Paragraph>
                <Button type="link" style={{ padding: 0 }}>Read More</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Testimonials Section */}
      <Card
        style={{
          maxWidth: 1200,
          margin: '0 auto 32px',
          borderRadius: theme.token.borderRadius,
        }}
        title={<Title level={3} style={{ margin: 0 }}>What Our Donors Say</Title>}
      >
        <Row gutter={[24, 24]}>
          {[
            {
              text: 'Donating blood through this organization was such a seamless and rewarding experience. Their dedication to saving lives is truly inspiring!',
              name: 'John Doe',
              role: 'Regular Donor',
              img: 'https://i.pravatar.cc/100?img=1',
            },
            {
              text: 'They make the process of blood donation so easy and accessible. I feel honored to be part of their mission.',
              name: 'Jane Smith',
              role: 'Community Volunteer',
              img: 'https://i.pravatar.cc/100?img=2',
            },
            {
              text: 'Professional, caring, and efficient! The team ensures every donor is well-informed and comfortable.',
              name: 'David Wilson',
              role: 'First-time Donor',
              img: 'https://i.pravatar.cc/100?img=3',
            },
          ].map((testimonial, idx) => (
            <Col xs={24} md={8} key={idx}>
              <Card bordered={false} style={{ minHeight: 200, borderRadius: theme.token.borderRadius }}>
                <Paragraph>"{testimonial.text}"</Paragraph>
                <Space align="center" style={{ marginTop: 16 }}>
                  <img src={testimonial.img} alt={testimonial.name} style={{ width: 48, borderRadius: '50%' }} />
                  <div>
                    <Title level={5} style={{ margin: 0 }}>{testimonial.name}</Title>
                    <Paragraph type="secondary" style={{ margin: 0 }}>{testimonial.role}</Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  </ConfigProvider>
);

export default Drives;
