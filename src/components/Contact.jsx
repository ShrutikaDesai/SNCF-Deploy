import React from "react";
import {
    Row,
    Col,
    Typography,
    Form,
    Input,
    Button,
    Divider,
    Card,
    Space,
} from "antd";
import { motion } from "framer-motion";
import {
    MailOutlined,
    PhoneOutlined,
    HomeOutlined,
    SendOutlined,
    EnvironmentOutlined,
    FacebookFilled,
    TwitterSquareFilled,
    InstagramFilled,
    YoutubeFilled,
    PinterestFilled,
} from "@ant-design/icons";
import theme from "../theme/themeConfig";

const { Title, Paragraph, Text } = Typography;

const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.22, delayChildren: 0.25 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const socialLinks = [
    {
        icon: <FacebookFilled style={{ color: "#1877F3", fontSize: 30 }} />,
        url: "https://facebook.com/",
    },
    {
        icon: <TwitterSquareFilled style={{ color: "#1DA1F2", fontSize: 30 }} />,
        url: "https://twitter.com/",
    },
    {
        icon: <InstagramFilled style={{ color: "#C13584", fontSize: 30 }} />,
        url: "https://instagram.com/",
    },
    { icon: <YoutubeFilled style={{ color: "#FF0000", fontSize: 30 }} />, url: "https://youtube.com/" },
    {
        icon: <PinterestFilled style={{ color: "#E60023", fontSize: 30 }} />,
        url: "https://pinterest.com/",
    },
];

const officeInfo = [
    {
        icon: <HomeOutlined style={{ color: "#0ABAB5", fontSize: 24 }} />,
        label: "Office Address",
        content: (
            <>
                Sant Nirankari Charitable Foundation (SNCF)
                <br />
                80-A, Main Market Ln, SN Colony, Nirankari Colony,
                <br />
                Mukherjee Nagar, New Delhi, Delhi, 110009
                <br />
                <a
                    href="https://maps.google.com/maps/dir//Sant+Nirankari+Charitable+Foundation+(SNCF)+80-A,+Main+Market+Ln+SN+Colony,+Nirankari+Colony,+Mukherjee+Nagar+New+Delhi,+Delhi,+110009/@28.7154966,77.2052307,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x390cfe087c000007:0x700b468b444e68e"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0ABAB5" }}
                >
                    Directions &rarr;
                </a>
                <br />
                <a
                    href="https://search.google.com/local/reviews?placeid=ChIJBwAAfAj-DDkRjuZEtGi0AAc&q=sant+nirankari+charitable+foundation&hl=en&gl=IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0ABAB5" }}
                >
                    4.8 ⭐ (204 reviews)
                </a>
            </>
        ),
    },
    {
        icon: <PhoneOutlined style={{ color: "#0ABAB5", fontSize: 24 }} />,
        label: "Contact Numbers",
        content: (
            <>
                Telephone: +91-11-47660380
                <br />
                Telephone: +91-11-47660200
                <br />
                Fax: +91-11-47660300
            </>
        ),
    },
    {
        icon: <MailOutlined style={{ color: "#0ABAB5", fontSize: 24 }} />,
        label: "Email Address",
        content: (
            <a
                href="mailto:sncf@nirankarifoundation.org"
                style={{ color: "#0ABAB5", wordBreak: "break-word" }}
            >
                sncf@nirankarifoundation.org
            </a>
        ),
    },
];

const Contact = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Form submitted:", values);
        form.resetFields();
    };

    return (
        <section
            style={{
                minHeight: "100vh",
                background: theme.token.colorBgLayout,
                padding: "4rem 1.5rem 6rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Header Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{
                    paddingBottom: 24,
                    maxWidth: 700,
                    margin: "0 auto 3rem auto",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Title
                    level={2}
                    style={{
                        color: "#1c276d",
                        fontWeight: 800,
                        marginBottom: 8,
                        letterSpacing: 1,
                    }}
                >
                    CONTACT US
                </Title>
                <Paragraph
                    style={{
                        color: "#5f6a8d",
                        fontSize: 18,
                        fontWeight: 500,
                        marginBottom: 0,
                    }}
                >
                    Get In Touch With Us!
                </Paragraph>
            </motion.div>

            {/* Info & Form + Map Section */}
            <Row
                gutter={[48, 32]}
                justify="center"
                style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}
            >
                {/* Left Side: Contact Details + Map below */}
                <Col
                    xs={24}
                    md={11}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        height: "100%",
                    }}
                >
                    {/* Contact Details Card */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ flex: "1 1 auto", minHeight: 400 }}
                    >
                        <Card
                            bordered={false}
                            style={{
                                borderRadius: 20,
                                padding: "2.5rem 2rem",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                                background: "linear-gradient(135deg, #e0f2fe 63%, #f1f5f9 100%)",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                            bodyStyle={{ padding: 0, flexGrow: 1 }}
                        >
                            <div>
                                <Title level={4} style={{ color: "#0ABAB5", marginBottom: 28 }}>
                                    <EnvironmentOutlined
                                        style={{ marginRight: 6, color: "#1c276d" }}
                                    />
                                    Foundation Office
                                </Title>
                                <Space direction="vertical" size={24} style={{ width: "100%" }}>
                                    {officeInfo.map((info) => (
                                        <div
                                            key={info.label}
                                            style={{ display: "flex", alignItems: "flex-start", gap: 18 }}
                                        >
                                            <span style={{ flexShrink: 0 }}>{info.icon}</span>
                                            <span>
                                                <Text strong style={{ color: "#1c276d" }}>
                                                    {info.label}:
                                                </Text>
                                                <br />
                                                <Text style={{ color: "#374151" }}>{info.content}</Text>
                                            </span>
                                        </div>
                                    ))}
                                </Space>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Map Card */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            marginTop: "2.5rem",
                            borderRadius: 20,
                            overflow: "hidden",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        }}
                    >
                        <iframe
                            title="Sant Nirankari Charitable Foundation Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.859537613326!2d77.1920784341699!3d28.728502981677853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde9adb264c1%3A0x80c07a2346cd3dd3!2sNirankari%20Colony%2C%20New%20Delhi%2C%20Delhi%20110009!5e0!3m2!1sen!2sin!4v1708752261884!5m2!1sen!2sin"
                            width="100%"
                            height="280"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </motion.div>
                </Col>

                {/* Right Side: Contact Form + Social Media below */}
                <Col xs={24} md={13} style={{ display: "flex", flexDirection: "column" }}>
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ minHeight: 400, flexGrow: 1 }}
                    >
                        <Card
                            bordered={false}
                            style={{
                                borderRadius: 20,
                                padding: "2.5rem 2rem",
                                boxShadow: "0 8px 32px rgba(28,39,109,0.10)",
                                background: "#fff",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                            }}
                            bodyStyle={{ padding: 0, flexGrow: 1 }}
                        >
                            <Title level={4} style={{ color: "#0ABAB5", marginBottom: 26 }}>
                                <MailOutlined style={{ marginRight: 8, color: "#1c276d" }} />
                                Send Us A Message
                            </Title>
                            <Form
                                form={form}
                                layout="vertical"
                                name="contact-form"
                                onFinish={onFinish}
                                requiredMark="optional"
                                style={{ maxWidth: 540, margin: "0 auto" }}
                                autoComplete="off"
                                scrollToFirstError
                            >
                                <Form.Item
                                    label="Your Name"
                                    name="name"
                                    rules={[
                                        { required: true, message: "Please enter your name" },
                                        { min: 2, message: "Name must be at least 2 characters" },
                                    ]}
                                >
                                    <Input placeholder="Enter your name" size="large" />
                                </Form.Item>
                                <Form.Item
                                    label="Your Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please enter your email" },
                                        { type: "email", message: "Please enter a valid email!" },
                                    ]}
                                >
                                    <Input placeholder="Enter your email" size="large" />
                                </Form.Item>
                                <Form.Item
                                    label="Subject"
                                    name="subject"
                                    rules={[{ required: true, message: "Please enter the subject" }]}
                                >
                                    <Input placeholder="Enter subject" size="large" />
                                </Form.Item>
                                <Form.Item label="Your Message" name="message" rules={[]}>
                                    <Input.TextArea rows={5} placeholder="Type your message (optional)" size="large" />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        style={{
                                            background: "#0ABAB5",
                                            borderColor: "#0ABAB5",
                                            fontWeight: 700,
                                            borderRadius: 10,
                                            boxShadow: "0 2px 8px rgba(28,39,109,0.10)",
                                            width: "100%",
                                        }}
                                        icon={<SendOutlined />}
                                    >
                                        Send Message
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </motion.div>

                    {/* Social Media Section */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            marginTop: 32,
                            width: "100%",
                            maxWidth: 540,
                            marginLeft: "auto",
                            marginRight: "auto",
                            textAlign: "center",
                        }}
                    >
                        <Divider orientation="center" style={{ color: "#1c276d", fontWeight: 700 }}>
                            Follow Us On
                        </Divider>
                        <Space size={28} style={{ justifyContent: "center" }}>
                            {socialLinks.map((s, idx) => (
                                <a
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={idx}
                                    aria-label={`Follow us on Social Media #${idx + 1}`}
                                    style={{ lineHeight: 1 }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </Space>
                    </motion.div>
                </Col>
            </Row>

            {/* Optional General Info Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: true }}
                style={{
                    maxWidth: 1100,
                    margin: "3rem auto 0 auto",
                    textAlign: "center",
                    color: "#5f6a8d",
                    fontSize: 16,
                    lineHeight: 1.7,
                    padding: "0 1rem",
                }}
            >
                <Paragraph>
                    We are committed to responding promptly to your inquiries and providing you the best possible support. Whether you have questions, feedback, or want to learn more about our initiatives, please reach out and connect with us.
                </Paragraph>
                <Paragraph>
                    Our team is here Monday to Friday from 9 AM to 6 PM IST to assist you. You can also visit our office at the address above.
                </Paragraph>
            </motion.div>
        </section>
    );
};

export default Contact;
