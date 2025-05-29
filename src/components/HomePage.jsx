import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EffectCoverflow} from "swiper/modules";
import 'swiper/css';
import { Typewriter } from 'react-simple-typewriter';
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

import bld1 from "../images/Blood-Donation.jpg";
import bld3 from "../images/blood.jpeg";
import image from "../images/city.jpg";
import t1 from "../images/tree.jpg";
import bld2 from "../images/BloodPNG.jpg";
import t2 from "../images/tree.jpg";
import h1 from "../images/health.jpeg";
import img4 from "../images/satyarthi.jpg";
import img5 from "../images/toi.jpg";
import img6 from "../images/uo.jpg";
import img7 from "../images/news1.jpg";
import img8 from "../images/news2.jpg";
import image2 from "../images/news2.jpg";

import image3 from "../images/blood.jpeg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import theme from "../theme/themeConfig"; // <-- Import your theme config

const { Title, Text, Paragraph } = Typography;
function Typing({ word, color }) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    setDisplay("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(word.slice(0, i + 1));
      i++;
      if (i === word.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, [word]);
  return (
    <span style={{ color, borderRight: "2px solid #fff", paddingRight: 2 }}>
      {display}
    </span>
  );
}
const slides = [
  {
    title: "Join our Blood Donation Drive",
    highlight: "Blood",
    images: [
  { src: bld1, bg: "#FF7043", style: { top: 0, right: 0 } },      // Top right
  { src: bld2, bg: "#26C485", style: { top: 120, left: 80 } },    // Middle left
  { src: bld3, bg: "#FFD600", style: { bottom: 0, right: 85 } },  // Bottom right
],

    paragraph: "Be a part of our movement and help make the world a better place by donating blood and supporting those in need.",
    button: "Explore More",
    highlightColor: "#FF477E",
  },
  {
    title: "Let’s Make Earth Greener with Tree Plantation",
    highlight: "Greener",
    images: [
      { src: t1, bg: "#26C485", style: { top: 0, right: 0 } },
      { src:  t1, bg: "#FFD600", style: { top: 120, left: 60 } },
      { src:  t2, bg: "#FF7043", style: { bottom: 0, right: 40 } },
    ],
    paragraph: "Join us in planting trees and making the earth greener for future generations.",
    button: "Get Involved",
    highlightColor: "#26C485",
  },
  {
    title: "Health Programs That Save Lives",
    highlight: "Health",
    images: [
      { src: h1, bg: "#FFD600", style: { top: 0, right: 0 } },
      { src: h1, bg: "#FF7043", style: { top: 120, left: 70 } },
      { src: h1, bg: "#26C485", style: { bottom: 0, right: 40 } },
    ],
    paragraph: "Participate in our health initiatives and help us save lives across communities.",
    button: "Learn More",
    highlightColor: "#FFD600",
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
   
<section
  style={{
    background: "linear-gradient(to right, #f5fafd, #e2f4fc 20%, #b3e0f7 60%, #a2d6f4)",
    padding: "48px 0 48px 0",
    minHeight: 380,
    borderRadius: "0 0 24px 24px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 2500, disableOnInteraction: false }} // 2.5 seconds
    loop
    style={{ width: "100%" }}
  >
    {slides.map((slide, idx) => (
      <SwiperSlide key={idx}>
        <Row
          align="middle"
          justify="center"
          style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}
          gutter={[32, 32]}
        >
          {/* Left content */}
          <Col xs={24} md={12}>
            <div style={{ maxWidth: 480 }}>
              <Title
  level={1}
  style={{
    color: "#2e3a59",
    fontWeight: 800,
    fontSize: "2.2rem",
    marginBottom: 12,
    lineHeight: 1.1,
  }}
>
  {(() => {
    const parts = slide.title.split(new RegExp(`(${slide.highlight})`, "i"));
    return parts.map((part, idx) =>
      part.toLowerCase() === slide.highlight.toLowerCase() ? (
        <Typing key={idx} word={part} color={slide.highlightColor} />
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  })()}
</Title>

              <Paragraph
                style={{
                  color: "#bdbad8",
                  fontSize: "1.1rem",
                  marginBottom: 20,
                  marginTop: 8,
                  maxWidth: 420,
                }}
              >
                {slide.paragraph}
              </Paragraph>
              <Button
                type="primary"
                size="large"
                style={{
                  background: slide.highlightColor,
                  borderColor: slide.highlightColor,
                  fontWeight: 600,
                  borderRadius: 8,
                  padding: "0 32px",
                  fontSize: "1.1rem",
                }}
              >
                {slide.button}
              </Button>
            </div>
          </Col>

          {/* Right images */}
          <Col xs={24} md={12} style={{ position: "relative", minHeight: 280 }}>
            <div style={{ position: "relative", width: "100%", height: 280 }}>
              {slide.images.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: img.bg,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ...img.style,
                  }}
                >
                  <img
                    src={img.src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


      {/* Mission Section */}
<section
  style={{
    padding: "4rem 1rem",
    background: "linear-gradient(to right, #f5fafd, #e2f4fc 20%, #b3e0f7 60%, #a2d6f4)",
  }}
>
  <Row gutter={[24, 24]} justify="center" style={{ maxWidth: 1200, margin: "0 auto" }}>
    {missionCards.map((item, index) => (
      <Col key={index} xs={24} sm={12} md={8} style={{ display: "flex" }}>
        <Card
          hoverable
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
          bodyStyle={{ transition: "all 0.3s ease" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
            e.currentTarget.style.background =
              "linear-gradient(135deg, #ffffff 0%, #f5fafd 100%)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
            e.currentTarget.style.background = "white";
          }}
          cover={
            <div style={{ padding: "1rem", textAlign: "center", color: "#333" }}>
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
              <Text style={{ color: theme.token.colorTextSecondary, textAlign: "justify" }}>
                {item.description}
              </Text>
            }
          />
          <Divider style={{ margin: "1rem 0" }} />
          <Paragraph style={{ flexGrow: 1, textAlign: "justify" }}>
            {item.content}
          </Paragraph>
        </Card>
      </Col>
    ))}
    <Col span={24} style={{ textAlign: "center", marginTop: "2rem" }}>
      <blockquote
        style={{ fontSize: "1.5rem", fontStyle: "italic", color: theme.token.colorPrimary }}
      >
        "Life gets a meaning, if it is lived for others"
      </blockquote>
      <Divider style={{ maxWidth: 200, margin: "1rem auto" }} />
    </Col>
  </Row>
</section>


      {/* About Us Section */}
      <section style={{ padding: "4rem 1rem",                       background: "linear-gradient(to right, #f5fafd, #e2f4fc 20%, #b3e0f7 60%, #a2d6f4)",
 }}>
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



      <section style={{ padding: "4rem 1rem",                       background: "linear-gradient(to right, #f5fafd, #e2f4fc 20%, #b3e0f7 60%, #a2d6f4)",
 }}>
  <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
    <Title level={2} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
      From Vision to Action
    </Title>
    <Paragraph style={{ fontSize: "1.1rem", color: theme.token.colorTextSecondary }}>
      Transforming noble ideals into impactful initiatives
    </Paragraph>

    <Swiper
      modules={[EffectCoverflow, Autoplay]}
      effect="coverflow"
      centeredSlides
      slidesPerView="auto"
      loop
      autoplay={{ delay: 3500 }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      {[image, image2, image3].map((img, idx) => {
        const titles = [
          "Sant Nirankari Health City",
          "Oneness वन",
          "Blood Donation",
          "Sant Nirankari Health City",
          "Oneness वन",
          "Blood Donation",
        ];
        const descriptions = [
          "The Sant Nirankari Health City is a comprehensive healthcare hub currently under construction, aiming to provide top-notch medical care at affordable rates for everyone.",
          "This innovative initiative was launched in 2021 to tackle deforestation by transforming neglected areas into flourishing mini-forests, restoring biodiversity one tiny plot at a time.",
          "For over 38 years, the mission has held regular blood donation drives. Since 2010, SNCF leads this life-saving effort, continuing Baba Hardev Singh Ji Maharaj's message.",
           "The Sant Nirankari Health City is a comprehensive healthcare hub currently under construction, aiming to provide top-notch medical care at affordable rates for everyone.",
    "This innovative initiative was launched in 2021 to tackle deforestation by transforming neglected areas into flourishing mini-forests, restoring biodiversity one tiny plot at a time.",
    "For over 38 years, the mission has held regular blood donation drives. Since 2010, SNCF leads this life-saving effort, continuing Baba Hardev Singh Ji Maharaj's message.",
        ];

        return (
          <SwiperSlide
            key={idx}
            style={{
              width: 300,
              transition: "transform 0.3s ease",
              transformOrigin: "center",
              boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Ribbon on middle card */}
            {idx === 1 && (
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: -40,
                  background: theme.token.colorPrimary,
                  color: "#fff",
                  padding: "4px 40px",
                  transform: "rotate(45deg)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  zIndex: 2,
                }}
              >
                Featured
              </div>
            )}

            <Card
              hoverable
              style={{
                borderRadius: 12,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              cover={
                <div
                  style={{
                    height: 200,
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              }
            >
              <Card.Meta
                title={
                  <Title level={4} style={{ color: theme.token.colorPrimary, fontWeight: 700, marginBottom: 8 }}>
                    {titles[idx]}
                  </Title>
                }
                description={
                  <Paragraph style={{ color: theme.token.colorTextSecondary, textAlign: "justify" }}>
                    {descriptions[idx]}
                  </Paragraph>
                }
              />
              <Button type="link" style={{ padding: 0, marginTop: 8 }}>
                Read More
              </Button>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
</section>





      {/* Partners Section */}
      <section style={{ padding: "4rem 1rem",                       background: "linear-gradient(to right, #f5fafd, #e2f4fc 20%, #b3e0f7 60%, #a2d6f4)",
}}>
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
<section style={{ padding: "4rem 1rem",                       background: "linear-gradient(to right, #f5fafd, #e2f4fc 20%, #b3e0f7 60%, #a2d6f4)",
 }}>
  <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
    <Title level={2} style={{ color: theme.token.colorPrimary, fontWeight: 700, marginBottom: 8 }}>
      Latest News & Stories
    </Title>
    <Paragraph
      type="secondary"
      style={{ fontSize: "1.15rem", color: theme.token.colorTextSecondary, maxWidth: 600, margin: "0 auto" }}
    >
      Stay updated with our latest efforts and inspiring stories.
    </Paragraph>

    <Row gutter={[24, 24]} style={{ marginTop: "2.5rem" }}>
      {newsData.map((news, index) => (
        <Col key={index} xs={24} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.25, duration: 0.6, ease: "easeOut" }}
            whileHover="hover"
            style={{ height: "100%" }}
            variants={{
              hover: { scale: 1.03, y: -8, boxShadow: "0 16px 32px rgba(0,0,0,0.12)" }
            }}
          >
            <Card
              hoverable={false} // disable default hover to use motion hover
              style={{
                borderRadius: theme.components.Card.borderRadius,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
              bodyStyle={{ flexGrow: 1, display: "flex", flexDirection: "column", padding: "1.5rem" }}
              cover={
                <div
                  style={{
                    height: 200,
                    backgroundImage: `url(${news.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderTopLeftRadius: theme.components.Card.borderRadius,
                    borderTopRightRadius: theme.components.Card.borderRadius,
                    transition: "transform 0.5s ease",
                  }}
                  className="news-card-image"
                />
              }
              onMouseEnter={e => {
                e.currentTarget.querySelector(".news-card-image").style.transform = "scale(1.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector(".news-card-image").style.transform = "scale(1)";
              }}
            >
              <Card.Meta
                title={
                  <Title
                    level={4}
                    style={{
                      color: theme.token.colorPrimary,
                      fontWeight: 700,
                      marginBottom: 8,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {news.title}
                  </Title>
                }
                description={
                  <>
                    <Paragraph
                      style={{
                        color: theme.token.colorTextSecondary,
                        flexGrow: 1,
                        marginBottom: "1rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {news.excerpt}
                    </Paragraph>
                    <Text
                      type="secondary"
                      style={{ color: theme.token.colorTextTertiary, fontSize: 12, letterSpacing: "0.03em" }}
                    >
                      {news.date}
                    </Text>
                  </>
                }
              />
              <Button
                type="link"
                style={{
                  padding: 0,
                  marginTop: "auto",
                  alignSelf: "flex-start",
                  fontWeight: 600,
                  color: theme.token.colorPrimary,
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
              >
                Read More
              </Button>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>

    <Button
      type="primary"
      size="large"
      style={{
        marginTop: "3rem",
        borderRadius: 6,
        padding: "0 2.5rem",
        fontWeight: 700,
        boxShadow: "0 6px 14px rgba(24, 144, 255, 0.3)",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 10px 30px rgba(24, 144, 255, 0.45)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 6px 14px rgba(24, 144, 255, 0.3)")}
    >
      View All News
    </Button>
  </div>
</section>

    </div>
  </ConfigProvider>
);

export default HomePage;
