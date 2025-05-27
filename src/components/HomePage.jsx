// HomePage.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaLeaf, FaBookOpen, FaHandsHelping } from "react-icons/fa";
import image from "../images/city.jpg"; // Adjust the path as needed
import image2 from "../images/tree.jpg"; // Adjust the path as needed
import image3 from "../images/Blood-Donation.jpg"; // Adjust the path as needed
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
// import "./HomePage.css";

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
    <div className="homepage">
    
      {/* Hero Section Start */}
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
    {/* --- First two slides: just images --- */}
    

    {/* --- Rest of the slides: as before --- */}
    {projectSlides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div
          className="hero-slide"
          style={{
            backgroundImage: `linear-gradient(
              rgba(0, 0, 50, 0.4), 
              rgba(0, 0, 100, 0.4)
            ), url(${slide.imageUrl})`,
          }}
        >
          {/* If .overlay has styling, keep this; otherwise, remove */}
          <div className="overlay"></div>
          <div className="hero-content">
            <span className="hero-tagline">
              <Typewriter
                options={{
                  strings: ["Together for a Better Tomorrow"],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 20,
                }}
              />
            </span>
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-buttons">
              <button className="btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      {/* Hero Section End */}

      {/* Mission Section */}
      <section className="mission-section">
  <div className="mission-container">
    {/* HEAL */}
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FaLeaf className="mission-icon heal" />
          <h3>HEAL</h3>
          <p className="front-content">SNCF's Multifaceted Approach towards healthcare initiatives</p>
        </div>
        <div className="flip-card-back">
          <h3>HEAL</h3>
          <div className="card-content">
            <p>
              SNCF is dedicated to improving healthcare. 
              Manages hospitals, clinics, blood banks, dispensaries & adopt strategies for environmental conservation.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ENRICH */}
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FaBookOpen className="mission-icon enrich" />
          <h3>ENRICH</h3>
          <p className="front-content">SNCF's Holistic Approach to Social Change</p>
        </div>
        <div className="flip-card-back">
          <h3>ENRICH</h3>
          <div className="card-content">
            <p>
              SNCF empowers communities through education. 
              We support educational, vocational & technical institutions, libraries, hostels in India.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* EMPOWER */}
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FaHandsHelping className="mission-icon empower" />
          <h3>EMPOWER</h3>
          <p className="front-content">SNCF investing in self-sufficiency, instilling empowerment through opportunity</p>
        </div>
        <div className="flip-card-back">
          <h3>EMPOWER</h3>
          <div className="card-content">
            <p>
              SNCF orchestrates individual empowerment through workshops, women/youth programs, 
              elder care, disaster relief, and disability support initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* QUOTE */}
    <div className="mission-quote">
      <blockquote>“Life gets a meaning, if it is lived for others”</blockquote>
      <div className="underline"></div>
    </div>
  </div>
</section>

<section className="aboutus-section">
  <div className="aboutus-container">
    <div className="aboutus-video-wrapper">
      <iframe
        className="aboutus-video"
        src="https://www.youtube.com/embed/90LjDMcWjl0?start=92"
        title="Sant Nirankari Charitable Foundation Introduction"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="aboutus-content">
      <h2 className="aboutus-title">About Us</h2>
      <p className="aboutus-description" style={{ textAlign: "justify" }}>
        The Sant Nirankari Charitable Foundation isn’t just about handing out aid. Guided by the principle of oneness, we bring compassion, care, and kindness to communities across the globe. Our work extends beyond basic charity, tackling social and environmental issues head-on. We strive to empower the underprivileged and protect our planet, creating a better world for all.
      </p>
      <button
        className="btn-primary aboutus-btn"
        onClick={() => (window.location.href = "#")}
      >
        Who We Are
      </button>
    </div>
  </div>
</section>



<section className="vision-section">
  <h2 className="vision-title">From Vision to Action</h2>
  <p className="vision-subtitle">Transforming noble ideals into impactful initiatives</p>

  <div className="vision-cards-container">
    {/* Card 1: Sant Nirankari Health City */}
    <div className="vision-card">
      <div
        className="vision-image"
        style={{ backgroundImage: {image} }}
      />
      <div className="vision-content">
        <h3>Sant Nirankari Health City</h3>
        <p>
          The Sant Nirankari Health City is a comprehensive healthcare hub currently under construction, 
          aiming to provide top-notch medical care at affordable rates for everyone.
        </p>
        <button className="vision-button">Read More</button>
      </div>
    </div>

    {/* Card 2: Oneness वन */}
    <div className="vision-card">
      <div
        className="vision-image"
        style={{ backgroundImage: {image2}}}
      />
      <div className="vision-content">
        <h3>Oneness वन</h3>
        <p>
          This innovative initiative was launched in 2021 to tackle deforestation by transforming neglected areas 
          into flourishing mini-forests, restoring biodiversity one tiny plot at a time.
        </p>
        <button className="vision-button">Read More</button>
      </div>
    </div>

    {/* Card 3: Blood Donation */}
    <div className="vision-card">
      <div
        className="vision-image"
        style={{ backgroundImage: {image3} }}
      /> 
      <div className="vision-content">
        <h3>Blood Donation</h3>
        <p>
          For over 38 years, the mission has held regular blood donation drives. Since 2010, SNCF leads this 
          life-saving effort, continuing Baba Hardev Singh Ji Maharaj’s message.
        </p>
        <button className="vision-button">Read More</button>
      </div>
    </div>
  </div>
</section>
{/* 



      {/* Partners Section */}
      <section className="brand-section">
  <div className="container">
    <h2 className="title">Our Network of Changemakers</h2>
    <div className="slider-wrapper">
      <div className="slider-track">
        <div className="slide"><img src={img4} alt="Brand 1" /></div>
        <div className="slide"><img src={img5} alt="Brand 2" /></div>
        <div className="slide"><img src={img6} alt="Brand 3" /></div>
        <div className="slide"><img src={img4} alt="Brand 4" /></div>
        <div className="slide"><img src={img5} alt="Brand 5" /></div>
        <div className="slide"><img src={img6} alt="Brand 6" /></div>
        <div className="slide"><img src={img4} alt="Brand 1" /></div>
        <div className="slide"><img src={img5} alt="Brand 2" /></div>
        <div className="slide"><img src={img6} alt="Brand 3" /></div>
      </div>
    </div>
  </div>
</section>


<section className="news-section">
  <h2 className="section-title">Latest News & Stories</h2>
  <p className="section-subtitle">Stay updated with our latest efforts and inspiring stories.</p>

  <div className="news-cards-container">
    {newsData.map((news, index) => (
      <motion.div
        key={index}
        className="news-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3, duration: 0.6 }}
      >
        <div className="news-card-image" style={{ backgroundImage: `url(${news.imageUrl})` }} />
        <div className="news-card-content">
          <h3 className="news-title">{news.title}</h3>
          <p className="news-excerpt">{news.excerpt}</p>
          <span className="news-date">{news.date}</span>
          <button className="read-more-btn">Read More</button>
        </div>
      </motion.div>
    ))}
  </div>

  <div className="view-all-btn-container">
    <button className="view-all-btn">View All News</button>
  </div>
</section>

{/* Empanelment & Accreditations Section */}
<section className="empanelment-section">
  <h2 className="section-title">Empanelments & Accreditations</h2>
  <Swiper
    modules={[Autoplay]}
    loop={true}
    autoplay={{ delay: 1500, disableOnInteraction: false }}
    spaceBetween={3} // reduced from 10 to 6
    slidesPerView={3}
    breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 3 },
      768: { slidesPerView: 2, spaceBetween: 3 },
      1024: { slidesPerView: 3, spaceBetween: 3 },
    }}
    className="empanelment-swiper"
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
        <div className="empanelment-slide">
          <img src={item.image} alt={item.alt} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>








    </div>
  );
};

export default HomePage;
