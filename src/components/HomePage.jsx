import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import {
  Card,
  Button,
  Typography,
  Space,
  Row,
  Col,
  Carousel,
  Divider,
  ConfigProvider,
} from "antd";
import {
  HeartOutlined,
  BookOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import image from "../images/city.jpg";
import image2 from "../images/tree.jpg";
import image3 from "../images/Blood-Donation.jpg";
import img1 from "../images/BloodPNG.jpg";
import img2 from "../images/tree.jpg";
import img3 from "../images/health.jpeg";
import img4 from "../images/satyarthi.jpg";
import img5 from "../images/toi.jpg";
import img6 from "../images/uo.jpg";
import img7 from "../images/news1.jpg";
import img8 from "../images/news2.jpg";

import Typewriter from "typewriter-effect";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./Navbar";
import theme from "../theme/themeConfig"; // <-- Import your theme config

const { Title, Text, Paragraph } = Typography;

const projectSlides = [
  {
    title: "Blood Donation Drive",
    subtitle: "Donate blood. Save lives. Be a hero today.",
    imageUrl: img1,
  },
  {
    title: "Tree Plantation 'Oneless वन'",
    subtitle: "Plant a tree. Gift a life.",
    imageUrl: img2,
  },
  {
    title: "Health & Wellness Camps",
    subtitle: "Caring for communities together.",
    imageUrl: img3,
  },
];

const newsData = [
  {
    title: "SNCF Honored for Humanitarian Service",
    excerpt:
      "Sant Nirankari Charitable Foundation was awarded 'Most Impactful NGO of the Year' at the 11th CSR Summit in Delhi.",
    imageUrl: img7,
    date: "August 2024",
  },
  {
    title: "Nirankari Rajmata Scholarship Scheme 2024-25",
    excerpt:
      "SNCF continues to support meritorious students with financial aid for professional and technical courses.",
    imageUrl: img8,
    date: "2024-25",
  },
  {
    title: "SNCF in 'Roko Toko Abhiyan', Jabalpur",
    excerpt:
      "During the pandemic, SNCF joined local authorities to raise awareness and distribute masks in Jabalpur.",
    imageUrl: img7,
    date: "2020",
  },
];

const missionCards = [
  {
    title: "HEAL",
    description: "SNCF's Multifaceted Approach towards healthcare initiatives",
    icon: <HeartOutlined style={{ fontSize: "3rem", color: theme.token.colorSuccess }} />,
    content: `SNCF is dedicated to improving healthcare. 
      Manages hospitals, clinics, blood banks, dispensaries & adopt strategies for environmental conservation.`,
  },
  {
    title: "ENRICH",
    description: "SNCF's Holistic Approach to Social Change",
    icon: <BookOutlined style={{ fontSize: "3rem", color: theme.token.colorInfo }} />,
    content: `SNCF empowers communities through education. 
      We support educational, vocational & technical institutions, libraries, hostels in India.`,
  },
  {
    title: "EMPOWER",
    description: "SNCF investing in self-sufficiency, instilling empowerment through opportunity",
    icon: <TeamOutlined style={{ fontSize: "3rem", color: theme.token.colorWarning }} />,
    content: `SNCF orchestrates individual empowerment through workshops, women/youth programs, 
      elder care, disaster relief, and disability support initiatives.`,
  },
];

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div
      style={{
        fontFamily: theme.token.fontFamily,
        background: theme.token.colorBgLayout,
        color: theme.token.colorText,
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section>
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          style={{ height: "55vh" }}
        >
          {projectSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                  height: "55vh",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <Space direction="vertical" size="large" align="center">
                  <Text style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 500 }}>
                    <Typewriter
                      options={{
                        strings: ["Together for a Better Tomorrow"],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 20,
                      }}
                    />
                  </Text>
                  <Title level={1} style={{ color: "#fff", fontWeight: 700, marginBottom: 0 }}>
                    {slide.title}
                  </Title>
                  <Paragraph style={{ color: "#fff", fontSize: "1.2rem", maxWidth: 600, margin: "0 auto" }}>
                    {slide.subtitle}
                  </Paragraph>
                  <Button type="primary" size="large">
                    Read More
                  </Button>
                </Space>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </section>

      {/* Mission Section */}
      <section style={{ padding: "4rem 1rem" }}>
        <Row gutter={[24, 24]} justify="center" style={{ maxWidth: 1200, margin: "0 auto" }}>
          {missionCards.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8} style={{ display: "flex" }}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                cover={
                  <div style={{ padding: "1rem", textAlign: "center" }}>
                    {item.icon}
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <Title level={4} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
                      {item.title}
                    </Title>
                  }
                  description={
                    <Text style={{ color: theme.token.colorTextSecondary }}>
                      {item.description}
                    </Text>
                  }
                />
                <Divider style={{ margin: "1rem 0" }} />
                <Paragraph style={{ flexGrow: 1 }}>{item.content}</Paragraph>
              </Card>
            </Col>
          ))}
          <Col span={24} style={{ textAlign: "center", marginTop: "2rem" }}>
            <blockquote style={{ fontSize: "1.5rem", fontStyle: "italic", color: theme.token.colorPrimary }}>
              "Life gets a meaning, if it is lived for others"
            </blockquote>
            <Divider style={{ maxWidth: 200, margin: "1rem auto" }} />
          </Col>
        </Row>
      </section>

      {/* About Us Section */}
      <section style={{ padding: "4rem 1rem", background: theme.token.colorBgContainer }}>
        <Row gutter={[24, 24]} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Col xs={24} md={12}>
            <div style={{ padding: "1rem" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/90LjDMcWjl0?start=92"
                title="Sant Nirankari Charitable Foundation Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: theme.token.borderRadius }}
              ></iframe>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Space direction="vertical" size="middle">
              <Title level={2} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
                About Us
              </Title>
              <Paragraph style={{ textAlign: "justify", color: theme.token.colorTextSecondary }}>
                The Sant Nirankari Charitable Foundation isn't just about handing out aid. Guided by the principle of oneness, we bring compassion, care, and kindness to communities across the globe. Our work extends beyond basic charity, tackling social and environmental issues head-on. We strive to empower the underprivileged and protect our planet, creating a better world for all.
              </Paragraph>
              <Button type="primary" size="large">
                Who We Are
              </Button>
            </Space>
          </Col>
        </Row>
      </section>

      {/* Vision Section */}
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <Title level={2} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
            From Vision to Action
          </Title>
          <Paragraph type="secondary" style={{ fontSize: "1.1rem", color: theme.token.colorTextSecondary }}>
            Transforming noble ideals into impactful initiatives
          </Paragraph>
          <Row gutter={[24, 24]} style={{ marginTop: "2rem" }}>
            {[image, image2, image3].map((img, idx) => {
              const titles = [
                "Sant Nirankari Health City",
                "Oneness वन",
                "Blood Donation",
              ];
              const descriptions = [
                "The Sant Nirankari Health City is a comprehensive healthcare hub currently under construction, aiming to provide top-notch medical care at affordable rates for everyone.",
                "This innovative initiative was launched in 2021 to tackle deforestation by transforming neglected areas into flourishing mini-forests, restoring biodiversity one tiny plot at a time.",
                "For over 38 years, the mission has held regular blood donation drives. Since 2010, SNCF leads this life-saving effort, continuing Baba Hardev Singh Ji Maharaj's message.",
              ];
              return (
                <Col key={idx} xs={24} md={8}>
                  <Card
                    hoverable
                    cover={
                      <div
                        style={{
                          height: 200,
                          backgroundImage: `url(${img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderTopLeftRadius: theme.components.Card.borderRadius,
                          borderTopRightRadius: theme.components.Card.borderRadius,
                        }}
                      />
                    }
                  >
                    <Card.Meta
                      title={
                        <Title level={4} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
                          {titles[idx]}
                        </Title>
                      }
                      description={
                        <Paragraph style={{ color: theme.token.colorTextSecondary }}>
                          {descriptions[idx]}
                        </Paragraph>
                      }
                    />
                    <Button type="link" style={{ padding: 0 }}>
                      Read More
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ padding: "4rem 1rem", background: theme.token.colorBgContainer }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <Title level={2} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
            Our Network of Changemakers
          </Title>
          <Carousel autoplay>
            {[0, 1].map((slideIndex) => (
              <div key={slideIndex}>
                <Row gutter={[16, 16]} justify="space-around" align="middle">
                  {[img4, img5, img6].map((img, idx) => (
                    <Col key={idx} span={8}>
                      <img src={img} alt={`Brand ${idx + 1 + slideIndex * 3}`} style={{ maxWidth: "100%", height: "auto" }} />
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* News Section */}
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <Title level={2} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
            Latest News & Stories
          </Title>
          <Paragraph type="secondary" style={{ fontSize: "1.1rem", color: theme.token.colorTextSecondary }}>
            Stay updated with our latest efforts and inspiring stories.
          </Paragraph>
          <Row gutter={[24, 24]} style={{ marginTop: "2rem" }}>
            {newsData.map((news, index) => (
              <Col key={index} xs={24} md={8}>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.3, duration: 0.6 }}>
                  <Card
                    hoverable
                    cover={
                      <div
                        style={{
                          height: 200,
                          backgroundImage: `url(${news.imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderTopLeftRadius: theme.components.Card.borderRadius,
                          borderTopRightRadius: theme.components.Card.borderRadius,
                        }}
                      />
                    }
                  >
                    <Card.Meta
                      title={
                        <Title level={4} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
                          {news.title}
                        </Title>
                      }
                      description={
                        <>
                          <Paragraph style={{ color: theme.token.colorTextSecondary }}>
                            {news.excerpt}
                          </Paragraph>
                          <Text type="secondary" style={{ color: theme.token.colorTextTertiary }}>
                            {news.date}
                          </Text>
                        </>
                      }
                    />
                    <Button type="link" style={{ padding: 0, marginTop: "1rem" }}>
                      Read More
                    </Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <Button type="primary" size="large" style={{ marginTop: "2rem" }}>
            View All News
          </Button>
        </div>
      </section>
    </div>
  </ConfigProvider>
);

export default HomePage;
