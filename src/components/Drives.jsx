import React from 'react';
import { Button, Card, Row, Col, Typography, Space, Carousel, Image } from 'antd';
import bld4 from "../images/bld4.gif";
import { ConfigProvider } from 'antd';
import theme from '../theme/themeConfig';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell,
} from 'recharts';
import { motion } from 'framer-motion';
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

const stats = [
  {
    value: '1200+',
    label: 'Donations Received',
  },
  {
    value: '800+',
    label: 'Pints of Blood Collected',
  },
  {
    value: '500+',
    label: 'Happy Recipients',
  },
];

const facts = [
  "Every 2 seconds, someone needs blood.",
  "A single blood donation can save up to 3 lives.",
  "Blood cannot be manufactured — it must come from donors.",
  "Type O negative is the universal donor type.",
  "Blood donors are lifesavers. Be one today.",
];

const COLORS = ['#E91E63', '#9C27B0', '#673AB7', '#3F51B5'];

const Drives = () => (
  <ConfigProvider theme={theme}>
    <div style={{ fontFamily: theme.token.fontFamily, background: theme.token.colorBgLayout, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section>
        {/* Upper Hero Section */}
        <Card
          style={{
            background: "linear-gradient(to right, #f5fafd, #e2f4fc 20%, #b3e0f7 60%, #a2d6f4)",
            border: 'none',
            borderRadius: 0,
          }}
          bodyStyle={{ padding: '48px 24px' }}
        >
          <Row
            gutter={[32, 32]}
            align="middle"
            justify="center"
            style={{ maxWidth: 1200, margin: '0 auto' }}
          >
            {/* Left Image */}
            <Col xs={24} md={10}>
              <Image
                src={bld4}
                alt="Blood Donation Kid"
                preview={false}
                style={{
                  width: '100%',
                  borderRadius: 12,
                }}
              />
            </Col>

            {/* Right Text Content */}
            <Col xs={24} md={14}>
              <Title level={2} style={{ color: theme.token.colorText }}>
                Every week, thousands rely on blood donations
              </Title>
              <Title level={4} style={{ color: theme.token.colorPrimary, marginBottom: 24 }}>
                Help us save lives by donating today
              </Title>
              <Paragraph style={{ color: theme.token.colorTextSecondary }}>
                There is often not enough blood available to meet the need. Your donation makes a huge difference. <em>Thank you.</em>
              </Paragraph>
              <Button
                type="primary"
                size="large"
                style={{
                  marginTop: 16,
                  background: "#1c276d",
                  borderColor: "#1c276d",
                }}
              >
                Donate Now
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Lower 'Did you know' Carousel */}
        <Card
          bodyStyle={{
            padding: '24px 0',
            background: theme.token.colorHighlight,
            color: '#fff',
            borderRadius: 0,
          }}
          style={{ marginBottom: 0 }}
        >
          <Row align="middle" justify="center" style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Col xs={24} md={6} style={{ paddingLeft: 24 }}>
              <Title level={4} style={{ color: '#fff', margin: 0 }}>
                Did you know...
              </Title>
            </Col>
            <Col xs={24} md={18}>
              <Carousel autoplay dots>
                {facts.map((fact, index) => (
                  <div key={index}>
                    <Paragraph
                      style={{
                        color: '#fff',
                        margin: 0,
                        fontSize: 16,
                        padding: '0 16px',
                        textAlign: 'left',
                      }}
                    >
                      {fact}
                    </Paragraph>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Card>
      </section>

      {/* Stats Section */}
      <section
        style={{
          background: 'linear-gradient(to right, #f5fafd, #e2f4fc 20%, #b3e0f7 60%, #a2d6f4)',
          padding: '64px 24px',
          marginTop: 32,
        }}
      >
        <Row
          gutter={[24, 24]}
          justify="center"
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  bordered={false}
                  style={{
                    textAlign: 'center',
                    borderRadius: theme.token.borderRadius,
                    padding: '32px 16px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <Title level={3} style={{ color: theme.token.colorPrimary, marginBottom: 8 }}>
                    {stat.value}
                  </Title>
                  <Paragraph style={{ color: theme.token.colorTextSecondary, margin: 0 }}>
                    {stat.label}
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

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
      <section style={{ background: '#f9fcff', padding: '64px 24px' }}>
        <Row
          gutter={[48, 48]}
          style={{ maxWidth: 1200, margin: '0 auto' }}
          align="middle"
        >
          {/* Left Content */}
          <Col xs={24} md={14}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Card
                bordered={false}
                style={{
                  borderRadius: theme.token.borderRadius,
                  padding: '32px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.06)',
                }}
                bodyStyle={{ padding: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Title level={3} style={{ color: theme.token.colorPrimary }}>
                    About the Project
                  </Title>
                </motion.div>

                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  >
                    <Paragraph style={{ color: theme.token.colorTextSecondary }}>
                      {[
                        "Our blood donation project is dedicated to building a healthier future by ensuring a constant and safe blood supply for hospitals and patients.",
                        "We focus not only on collecting blood but also on raising awareness about the importance of regular donation. Our initiatives make the donation process easy, transparent, and rewarding.",
                        "By engaging volunteers, educating youth, and utilizing technology, we create a sustainable model where timely blood availability becomes a reality. Every drop counts, every donor matters.",
                      ][i]}
                    </Paragraph>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Button type="link" href="#video-section" style={{ padding: 0 }}>
                    Read More
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </Col>

          {/* Right Image */}
          <Col xs={24} md={10}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src={projectImg}
                alt="Project"
                style={{
                  width: '85%',
                  display: 'block',
                  margin: '0 auto',
                  borderRadius: theme.token.borderRadius,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </section>

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
