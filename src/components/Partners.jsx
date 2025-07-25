import React from "react";
import { Row, Col, Card, Typography, Divider, Button, Space } from "antd";
import { motion } from "framer-motion";
import theme from "../theme/themeConfig";

// Import all partner logos from assets folder
import part1 from "../assets/part1.jpg"; // Adjust the path as necessary
import part2 from "../assets/part2.jpg";
import part3 from "../assets/part3.jpg";
import part4 from "../assets/part4.jpg";
import part5 from "../assets/part5.jpg";
import part6 from "../assets/part6.jpg";
import part7 from "../assets/part7.jpg";
import part8 from "../assets/part8.jpg";
import part9 from "../assets/part9.jpg";
import part10 from "../assets/part10.jpg";
import part11 from "../assets/part11.jpg";
import part12 from "../assets/part12.jpg";


const { Title, Paragraph } = Typography;

const partners = [
    {
        src: part1,
        alt: "United Nations Organization Logo",
        name: "United Nations Organization",
        description:
            "SNCF holds a special consultative status honored by the UN, consistently supporting Millennium Development Goals through awareness drives and initiatives.",
    },
    {
        src: part2,
        alt: "Ministry of Indian Railways Logo",
        name: "Ministry of Indian Railways",
        description: "Cleanliness drives at 263 railway stations pan India.",
    },
    {
        src: part3,
        alt: "Indian Red Cross Society Logo",
        name: "Indian Red Cross Society",
        description: "Collaborated on blood donation drives.",
    },
    {
        src: part4,
        alt: "Life Chiropractic College West Logo",
        name: "The Life Chiropractic College West",
        description:
            "Collaboration providing free chiropractic treatment services.",
    },
    {
        src: part5,
        alt: "Ministry of Urban Development India Logo",
        name: "Ministry of Urban Development (India)",
        description: "Clean India campaign for a hygienic and healthy country.",
    },
    {
        src: part6,
        alt: "Kailash Satyarthi Children’s Foundation Logo",
        name: "Kailash Satyarthi Children’s Foundation",
        description:
            "Supports nationwide Safe Childhood, Safe India campaign against child exploitation. Founded by Nobel Laureate Kailash Satyarthi.",
    },
    {
        src: part7,
        alt: "NDTV Logo",
        name: "NDTV - Leading News Channel in India",
        description: "Cleanliness campaign across India for a cleaner environment.",
    },
    {
        src: part8,
        alt: "Times of India Logo",
        name: "Times of India - Leading Daily of India",
        description: "Tree plantation drives across India for a greener planet.",
    },
    {
        src: part9,
        alt: "NIIT Logo",
        name: "NIIT (National Institute of Information Technology)",
        description: "Computer courses for youth skill development.",
    },
    {
        src: part10,
        alt: "Singer India Ltd. Logo",
        name: "Singer India Ltd.",
        description: "Vocational training programs empowering women.",
    },
    {
        src: part11,
        alt: "The Blind Relief Association, Delhi Logo",
        name: "The Blind Relief Association, Delhi",
        description: "Skill development efforts for the visually challenged.",
    },
    {
        src: part12,
        alt: "Eye Bank Association of India (EBAI) Logo",
        name: "Eye Bank Association of India (EBAI)",
        description: "Eye donation pledge and awareness campaigns.",
    },
];

// Framer Motion animation variants
const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const Partners = () => {
    return (
        <section
            style={{
                background: theme.token.colorBgLayout,
                padding: "4rem 2rem 6rem",
                minHeight: "100vh",
                maxWidth: 1500,
                margin: "0 auto",
            }}
        >
            {/* Header Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ maxWidth: 720, margin: "0 auto 3rem", textAlign: "center" }}
            >
                <Title
                    level={2}
                    style={{ color: "#0ABAB5", fontWeight: 900, letterSpacing: "0.05em" }}
                >
                    Supports and Collaborations
                </Title>
                <Paragraph
                    style={{
                        color: "#5f6a8d",
                        fontSize: 18,
                        marginTop: 8,
                        fontWeight: 500,
                    }}
                >
                    SNCF has executed numerous humanitarian initiatives and projects in
                    collaboration with government and philanthropic organizations for a
                    much wider and effective outreach.
                </Paragraph>
                <Divider />
            </motion.div>

            {/* Partners Logos Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Row gutter={[32, 32]} justify="center">
                    {partners.map(({ src, alt, name, description }, idx) => (
                        <Col
                            key={idx}
                            xs={24}
                            sm={12}
                            md={8}
                            lg={8}
                            xl={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <motion.div
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 30px rgba(10, 186, 181, 0.35)",
                                }}
                                style={{
                                    cursor: "pointer",
                                    borderRadius: 16,
                                    overflow: "hidden",
                                    width: "100%",
                                    maxWidth: 320,
                                    background: "#fff",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: 24,
                                    textAlign: "center",
                                    userSelect: "none",
                                }}
                            >
                                <img
                                    src={src}
                                    alt={alt}
                                    style={{
                                        maxWidth: "220px",
                                        maxHeight: 120,
                                        objectFit: "contain",
                                        marginBottom: 20,
                                    }}
                                    loading="lazy"
                                />
                                <Title
                                    level={4}
                                    style={{
                                        margin: "0 0 8px",
                                        color: "#1c276d",
                                        fontWeight: 700,
                                    }}
                                >
                                    {name}
                                </Title>
                                <Paragraph
                                    style={{
                                        fontSize: 14,
                                        color: "#555f72",
                                        lineHeight: 1.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    {description}
                                </Paragraph>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                    background:
                        "linear-gradient(120deg, #0ABAB5 0%, #1c276d 100%)",
                    borderRadius: 24,
                    padding: "3rem 2rem",
                    maxWidth: 720,
                    margin: "4rem auto 0 auto",
                    textAlign: "center",
                    boxShadow: "0 8px 40px rgba(28,39,109,0.25)",
                    color: "#fff",
                    userSelect: "none",
                }}
            >
                <Title level={2} style={{ fontWeight: 900, marginBottom: 16 }}>
                    Partner With Us & Amplify Impact
                </Title>
                <Paragraph
                    style={{
                        fontSize: 18,
                        maxWidth: 600,
                        margin: "auto",
                        fontWeight: 500,
                        lineHeight: 1.5,
                    }}
                >
                    Join hands with Sant Nirankari Charitable Foundation to empower
                    communities and foster sustainable social change at scale.
                </Paragraph>
                <Button
                    type="ghost"
                    size="large"
                    style={{
                        marginTop: 24,
                        borderRadius: 10,
                        borderColor: "#fff",
                        color: "#fff",
                        fontWeight: 700,
                        padding: "0.8rem 2.8rem",
                        letterSpacing: "0.05em",
                        transition: "all 0.3s ease",
                    }}
                    href="/contact"
                >
                    Contact Us Today
                </Button>
            </motion.div>
        </section>
    );
};

export default Partners;
