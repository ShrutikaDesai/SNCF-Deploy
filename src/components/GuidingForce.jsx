import React from "react";
import { Row, Col, Button, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import backgroundAnimation from "../images/corner.json";
import playButtonAnimation from "../images/button.json";
import guidingForceImage from "../images/Mataji.webp";
import img from "../images/member.jpeg"; // Placeholder for leader image
import theme from "../theme/themeConfig"; // <-- Import your theme config

const { Title, Paragraph } = Typography;
const { Text } = Typography;

const leaders = [
  {
    name: "Shri President Name",
    designation: "President",
    image: img,
    quote: "Leading with purpose and compassion.",
  },
  {
    name: "Shri Vice-President Name",
    designation: "Vice-President",
    image: img,
    quote: "Empowering the future, one step at a time.",
  },
  {
    name: "Shri Member Name",
    designation: "Chief Member",
    image: img,
    quote: "Serving with dedication and integrity.",
  },
];

const GuidingForce = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1 },
    }),
  };

  return (
    <section
      style={{
        padding: "6rem 2rem",
        background: theme.token.colorBgLayout,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.4 }}
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, #c7d2fe, transparent)",
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.4 }}
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, #a5b4fc, transparent)",
          zIndex: 0,
        }}
      />

      <Row
        gutter={[32, 32]}
        align="middle"
        justify="center"
        style={{
          zIndex: 1,
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Image Section */}
        <Col xs={24} md={10}>
          <motion.img
            src={guidingForceImage}
            alt="Her Holiness Satguru Mata Sudiksha Ji Maharaj"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.4 }}
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
              display: "block",
              margin: "0 auto",
              objectFit: "cover",
            }}
          />
        </Col>

        {/* Text Section */}
        <Col xs={24} md={14}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Title
              level={4}
              style={{
                color: "#2b8bbbff",
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: 1.5,
              }}
            >
              Our Guiding Force
            </Title>
            <Title
              level={2}
              style={{
                color: "#1c276d",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              Her Holiness Satguru Mata Sudiksha Ji Maharaj
            </Title>
            <Paragraph
              style={{
                fontSize: 18,
                color: "#4b5563",
                marginTop: 20,
                lineHeight: 1.8,
                textAlign: "justify",
              }}
            >
              Her Holiness Satguru Mata Sudiksha Ji Maharaj is the revered head
              of the Sant Nirankari Mission, a global mission that promotes
              peace, unity, and social welfare. Her teachings inspire millions
              with the message of universal love, inner transformation, selfless
              service, and the importance of being socially responsible
              citizens.
            </Paragraph>

            {/* Watch Video Button */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 24px rgba(99,102,241,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3rem",
                cursor: "pointer",
                gap: "1.5rem",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "3rem",
                boxShadow: "0 4px 20px rgba(99,102,241,0.1)",
                padding: "1rem 2.5rem",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #2b8bbbff 0%, #0f3f57ff 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 14px rgba(99,102,241,0.2)",
                }}
              >
                <Lottie
                  animationData={playButtonAnimation}
                  style={{ width: 64, height: 84, color: "white" }}
                />
              </div>
              <Button
                type="primary"
                size="large"
                style={{
                  background:
                    "linear-gradient(90deg, #2b8bbbff 0%, #0f3f57ff 100%)",
                  border: "none",
                  borderRadius: "2rem",
                  fontWeight: 600,
                  fontSize: 18,
                  padding: "0 2.5rem",
                  color: "#fff",
                  letterSpacing: "1px",
                  transition: "background 0.3s ease",
                }}
              >
                Watch Video
              </Button>
            </motion.div>
          </motion.div>
        </Col>
      </Row>

      <section
        style={{
          padding: "4rem 1rem",
          backgroundColor: theme.token.colorBgLayout,
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            color: "#1c276d",
          }}
        >
          Our Pillars of Inspiration
        </Title>

        <Row
          gutter={[24, 24]}
          justify="center"
          style={{ maxWidth: 1200, margin: "0 auto" }}
        >
          {leaders.map((leader, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  backgroundColor: "#fff",
                  padding: "2rem",
                  borderRadius: "1.5rem",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "320px",
                }}
              >
                <div style={{ marginBottom: "1.5rem" }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid #1c276d",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
                    }}
                  />
                </div>
                <Title
                  level={4}
                  style={{ color: "#1c276d", marginBottom: "0.5rem" }}
                >
                  {leader.name}
                </Title>
                <Text
                  style={{
                    display: "block",
                    marginBottom: "1rem",
                    color: "#555",
                  }}
                >
                  {leader.designation}
                </Text>
                <blockquote style={{ fontStyle: "italic", color: "#888" }}>
                  "{leader.quote}"
                </blockquote>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Detailed Mission Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.4 }}
        style={{
          marginTop: "4rem",
          padding: "2.5rem",
          background: theme.token.colorBgLayout,
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Title
          level={3}
          style={{
            color: "#1c276d",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Serving Humanity: The Sant Nirankari Charitable Foundation Vision
        </Title>
        <Divider />

        {/* Animated Paragraphs */}
        {[
          "Sant Nirankari Charitable Foundation volunteers embody the mission’s unity vision across the globe. From natural disasters like earthquakes and floods to wildfires, they provide relief and rebuild communities. During the COVID-19 crisis, the mission transformed its centres into quarantine and vaccination sites, offering aid and becoming a lifeline for many. Her Holiness’ focus towards affordable quality healthcare extends to the upcoming Sant Nirankari Health City in North Delhi. This ambitious project promises to be a world-class, multi-specialty healthcare facility, offering advanced treatments and wellness services to everyone, all guided by principles of compassion and care.",
          "A key tenet of Her Holiness’ vision for a better world is safeguarding our environment. Seeking inspiration from the same, the volunteers actively contribute to various initiatives. Among these, “Oneness Vann” is an endeavour where volunteers are transforming small areas into thriving ecosystems with tree clusters and micro forests. This led to the plantation of 1000 mini forests PAN India.",
          "Project Amrit (water cleanliness drive), launched in 2023 in collaboration with the Government of India, has become a milestone in cleaning the nation’s water sources. Over 1100+ rivers, ponds, ghats, and beaches across 27 states have been revitalised. Regular cleanups ensure these water sources stay healthy, while educational programs raise awareness about water conservation. Project Amrit reminds us all of the precious gift that water is to our planet.",
          "The Nirankari Youth Symposium is a testament to Her Holiness’ dedication to empowering young people and shaping a better tomorrow. NIMA or the Nirankari Institute of Music and Arts provides a platform for thousands of youngsters to hone their skills in music and the performing arts.",
          "Her Holiness Satguru Mata Sudiksha Ji Maharaj stands as a beacon of spiritual guidance and social responsibility, inspiring individuals and communities to embrace a life of compassion, service, and environmental stewardship.",
        ].map((text, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
          >
            <Paragraph
              style={{
                fontSize: 18,
                color: "#4a4a4a",
                textAlign: "justify",
                lineHeight: 1.8,
                marginTop: index === 0 ? "0" : "1.5rem",
              }}
            >
              {text}
            </Paragraph>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GuidingForce;
