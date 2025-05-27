import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaLeaf, FaBookOpen, FaHandsHelping } from "react-icons/fa";
import {
  Card,
  Button,
  Typography,
  Space,
  Row,
  Col,
  Carousel,
  Divider
} from 'antd';
import {
  HeartOutlined,
  BookOutlined,
  TeamOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  MedicineBoxOutlined
} from '@ant-design/icons';

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
import img9 from "../images/acc1.jpg";
import img10 from "../images/acc2.jpeg";
import img11 from "../images/acc3.jpeg";
import img12 from "../images/acc4.jpeg";

import Typewriter from "typewriter-effect";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./Navbar";

const { Title, Text, Paragraph } = Typography;

const projectSlides = [
  {
    title: "Blood Donation Drive",
    subtitle: "Donate blood. Save lives. Be a hero today.",
    imageUrl: img1,
  },
  {
    title: "Tree Plantation ' Oneless वन ' ",
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
    excerpt: "Sant Nirankari Charitable Foundation was awarded 'Most Impactful NGO of the Year' at the 11th CSR Summit in Delhi.",
    imageUrl: img7,
    date: "August 2024",
  },
  {
    title: "Nirankari Rajmata Scholarship Scheme 2024-25",
    excerpt: "SNCF continues to support meritorious students with financial aid for professional and technical courses.",
    imageUrl: img8,
    date: "2024-25",
  },
  {
    title: "SNCF in 'Roko Toko Abhiyan', Jabalpur",
    excerpt: "During the pandemic, SNCF joined local authorities to raise awareness and distribute masks in Jabalpur.",
    imageUrl: img7,
    date: "2020",
  },
];

const HomePage = () => {
  return (
    <div >
      {/* Hero Section */}
      <Navbar />
      <section className="hero-section">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="hero-swiper"
        >
          {projectSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 50, 0.4), 
                    rgba(0, 0, 100, 0.4)
                  ), url(${slide.imageUrl})`,
                  height: '55vh',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#fff'
                }}
              >
                <div className="hero-content">
                  <Space direction="vertical" size="large">
                    <Text className="hero-tagline" style={{ color: '#fff', fontSize: '1.5rem' }}>
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
                    <Title level={1} style={{ color: '#fff' }}>{slide.title}</Title>
                    <Paragraph style={{ color: '#fff', fontSize: '1.2rem' }}>{slide.subtitle}</Paragraph>
                    <Button type="primary" size="large">Read More</Button>
                  </Space>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Mission Section */}
      <section className="mission-section" style={{ padding: '4rem 0' }}>
        <Row
          gutter={[24, 24]}
          justify="center"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {[{
            title: "HEAL",
            description: "SNCF's Multifaceted Approach towards healthcare initiatives",
            icon: <HeartOutlined style={{ fontSize: '3rem', color: '#52c41a' }} />,
            content: `SNCF is dedicated to improving healthcare. 
      Manages hospitals, clinics, blood banks, dispensaries & adopt strategies for environmental conservation.`
          }, {
            title: "ENRICH",
            description: "SNCF's Holistic Approach to Social Change",
            icon: <BookOutlined style={{ fontSize: '3rem', color: '#1890ff' }} />,
            content: `SNCF empowers communities through education. 
      We support educational, vocational & technical institutions, libraries, hostels in India.`
          }, {
            title: "EMPOWER",
            description: "SNCF investing in self-sufficiency, instilling empowerment through opportunity",
            icon: <TeamOutlined style={{ fontSize: '3rem', color: '#faad14' }} />,
            content: `SNCF orchestrates individual empowerment through workshops, women/youth programs, 
      elder care, disaster relief, and disability support initiatives.`
          }].map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8} style={{ display: 'flex' }}>
              <Card
                hoverable
                style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                cover={
                  <div style={{ padding: '1rem', textAlign: 'center' }}>
                    {item.icon}
                  </div>
                }
              >
                <Card.Meta title={item.title} description={item.description} />
                <Divider />
                <Paragraph style={{ flexGrow: 1 }}>
                  {item.content}
                </Paragraph>
              </Card>
            </Col>
          ))}

          <Col span={24} style={{ textAlign: 'center', marginTop: '2rem' }}>
            <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
              "Life gets a meaning, if it is lived for others"
            </blockquote>
            <Divider style={{ maxWidth: '200px', margin: '1rem auto' }} />
          </Col>
        </Row>
      </section>


      {/* About Us Section */}
      <section className="aboutus-section" style={{ padding: '4rem 0', backgroundColor: '#f0f2f5' }}>
        <Row gutter={[24, 24]} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Col xs={24} md={12}>
            <div style={{ padding: '1rem' }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/90LjDMcWjl0?start=92"
                title="Sant Nirankari Charitable Foundation Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Space direction="vertical" size="middle">
              <Title level={2}>About Us</Title>
              <Paragraph style={{ textAlign: 'justify' }}>
                The Sant Nirankari Charitable Foundation isn't just about handing out aid. Guided by the principle of oneness, we bring compassion, care, and kindness to communities across the globe. Our work extends beyond basic charity, tackling social and environmental issues head-on. We strive to empower the underprivileged and protect our planet, creating a better world for all.
              </Paragraph>
              <Button type="primary" size="large">Who We Are</Button>
            </Space>
          </Col>
        </Row>
      </section>

      {/* Vision Section */}
      <section className="vision-section" style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Title level={2}>From Vision to Action</Title>
          <Paragraph type="secondary" style={{ fontSize: '1.1rem' }}>
            Transforming noble ideals into impactful initiatives
          </Paragraph>

          <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
            <Col xs={24} md={8}>
              <Card
                cover={
                  <div
                    style={{
                      height: '200px',
                      backgroundImage: `url(${image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                }
              >
                <Card.Meta
                  title="Sant Nirankari Health City"
                  description={
                    <Paragraph>
                      The Sant Nirankari Health City is a comprehensive healthcare hub currently under construction,
                      aiming to provide top-notch medical care at affordable rates for everyone.
                    </Paragraph>
                  }
                />
                <Button type="link" style={{ padding: 0 }}>Read More</Button>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                cover={
                  <div
                    style={{
                      height: '200px',
                      backgroundImage: `url(${image2})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                }
              >
                <Card.Meta
                  title="Oneness वन"
                  description={
                    <Paragraph>
                      This innovative initiative was launched in 2021 to tackle deforestation by transforming neglected areas
                      into flourishing mini-forests, restoring biodiversity one tiny plot at a time.
                    </Paragraph>
                  }
                />
                <Button type="link" style={{ padding: 0 }}>Read More</Button>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                cover={
                  <div
                    style={{
                      height: '200px',
                      backgroundImage: `url(${image3})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                }
              >
                <Card.Meta
                  title="Blood Donation"
                  description={
                    <Paragraph>
                      For over 38 years, the mission has held regular blood donation drives. Since 2010, SNCF leads this
                      life-saving effort, continuing Baba Hardev Singh Ji Maharaj's message.
                    </Paragraph>
                  }
                />
                <Button type="link" style={{ padding: 0 }}>Read More</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Partners Section */}
      <section className="brand-section" style={{ padding: '4rem 0', backgroundColor: '#f0f2f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Title level={2}>Our Network of Changemakers</Title>
          <Carousel autoplay>
            <div>
              <Row gutter={[16, 16]} justify="space-around" align="middle">
                <Col span={8}><img src={img4} alt="Brand 1" style={{ maxWidth: '100%', height: 'auto' }} /></Col>
                <Col span={8}><img src={img5} alt="Brand 2" style={{ maxWidth: '100%', height: 'auto' }} /></Col>
                <Col span={8}><img src={img6} alt="Brand 3" style={{ maxWidth: '100%', height: 'auto' }} /></Col>
              </Row>
            </div>
            <div>
              <Row gutter={[16, 16]} justify="space-around" align="middle">
                <Col span={8}><img src={img4} alt="Brand 4" style={{ maxWidth: '100%', height: 'auto' }} /></Col>
                <Col span={8}><img src={img5} alt="Brand 5" style={{ maxWidth: '100%', height: 'auto' }} /></Col>
                <Col span={8}><img src={img6} alt="Brand 6" style={{ maxWidth: '100%', height: 'auto' }} /></Col>
              </Row>
            </div>
          </Carousel>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section" style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Title level={2}>Latest News & Stories</Title>
          <Paragraph type="secondary" style={{ fontSize: '1.1rem' }}>
            Stay updated with our latest efforts and inspiring stories.
          </Paragraph>

          <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
            {newsData.map((news, index) => (
              <Col key={index} xs={24} md={8}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.6 }}
                >
                  <Card
                    cover={
                      <div
                        style={{
                          height: '200px',
                          backgroundImage: `url(${news.imageUrl})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    }
                  >
                    <Card.Meta
                      title={news.title}
                      description={
                        <>
                          <Paragraph>{news.excerpt}</Paragraph>
                          <Text type="secondary">{news.date}</Text>
                        </>
                      }
                    />
                    <Button type="link" style={{ padding: 0, marginTop: '1rem' }}>Read More</Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <Button type="primary" size="large" style={{ marginTop: '2rem' }}>View All News</Button>
        </div>
      </section>

      {/* Empanelment Section */}
      <section className="empanelment-section" style={{ padding: '4rem 0', backgroundColor: '#f0f2f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Title level={2}>Empanelments & Accreditations</Title>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            spaceBetween={3}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 3 },
              768: { slidesPerView: 2, spaceBetween: 3 },
              1024: { slidesPerView: 3, spaceBetween: 3 },
            }}
            style={{ padding: '1rem 0' }}
          >
            {[
              { image: img9, alt: "Accreditation 1" },
              { image: img11, alt: "Certificate 2" },
              { image: img10, alt: "Social Media Post" },
              { image: img12, alt: "Empanelment 4" },
              { image: img11, alt: "Recognition 5" },
              { image: img10, alt: "Social Media Post" },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div style={{ padding: '1rem', textAlign: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '4px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HomePage;