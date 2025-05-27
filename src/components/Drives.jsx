import React from 'react';
import { Button } from 'antd';
import './Drives.css';
// Recharts imports
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Import images at the top!
import projectImg from '../images/blood2.jpg';
import blogImg1 from '../images/blood.jpeg';
import blogImg2 from '../images/blood.jpeg';
import blogImg3 from '../images/blood.jpeg';

// Dummy Data for graphs
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

const Drives = () => {
  return (
    <div className="drives-page">

      {/* Hero Section */}
      <section className="hero-section">
  <div className="hero-content">
    <h2 className="hero-highlight-heading">Blood Donation Drive</h2> {/* New Heading */}
    <h1 className="hero-title">
      <span className="typing-animation">
        Empower Lives: Join Our Mission
      </span>
    </h1>
    <p className="hero-subtitle">
      Together, we can bring hope and change to countless lives.
    </p>
    <Button type="primary" size="large" className="hero-btn">
      Join with Us
    </Button>
  </div>
</section>





<section className="stats-section">
  <div className="stats-container">
    <div className="stat-card">
      <span className="stat-number count1">1200+</span>
      <p className="stat-description">Donations Received</p>
    </div>
    <div className="stat-card">
      <span className="stat-number count2">800+</span>
      <p className="stat-description">Pints of Blood Collected</p>
    </div>
    <div className="stat-card">
      <span className="stat-number count3">500+</span>
      <p className="stat-description">Happy Recipients</p>
    </div>
  </div>
</section>



      {/* Graph Section */}
      <section className="graph-section">
        <div className="graph-container">
          <h2 className="graph-title">Donation Impact Overview</h2>

          <div className="graphs-wrapper">
            {/* Line Chart */}
            <div className="graph-card">
              <h3>Yearly Donation Trends</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={donationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="donations"
                    stroke="#E91E63"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="graph-card">
              <h3>Donation Statistics</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={donationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="donations" fill="#9C27B0" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="graph-card">
              <h3>Blood Type Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={bloodTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#673AB7"
                    dataKey="value"
                    label
                  >
                    {bloodTypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <div className="project-details-section">
  <div className="container">
    <div className="details-wrapper">
      
      {/* Content Section */}
      <div className="project-content">
        <h2 className="project-heading">About Project</h2>
        <p className="project-text">
          Our blood donation project is dedicated to building a healthier future by ensuring a constant and safe blood supply for hospitals and patients. 
          Through organized blood drives, community outreach programs, and partnerships with healthcare organizations, we aim to bridge the gap between blood donors and those in urgent need.
        </p>
        <p className="project-text">
          We focus not only on collecting blood but also on raising awareness about the importance of regular donation. 
          Our initiatives are designed to make the donation process easy, transparent, and rewarding, fostering a community of regular donors committed to saving lives.
        </p>
        <p className="project-text">
          By engaging volunteers, educating youth, and utilizing technology, we strive to create a sustainable model where timely blood availability becomes a reality for everyone.
          Join us in this life-saving mission — every drop counts, every donor matters.
        </p>
        <p className="project-text">
          By engaging volunteers, educating youth, and utilizing technology, we strive to create a sustainable model where timely blood availability becomes a reality for everyone.
          Join us in this life-saving mission — every drop counts, every donor matters.
        </p>
        <p className="project-text">
          By engaging volunteers, educating youth, and utilizing technology, we strive to create a sustainable model where timely blood availability becomes a reality for everyone.
          Join us in this life-saving mission — every drop counts, every donor matters.
        </p>

        {/* Read More Button */}
        <a href="#video-section" className="read-more-btn">Read More</a>
      </div>

      {/* Image Section */}
      <div className="project-image">
        <img src={projectImg} alt="Project" className="image-float" />
      </div>
      
    </div>
  </div>
</div>






      {/* Blogs Section */}
      <section className="blogs-section">
  <div className="container">
    <h2 className="section-title">Latest Updates</h2>
    <div className="blogs-wrapper">
      
      <div className="blog-card">
        <div className="blog-image">
          <img src={blogImg1} alt="Blog 1" />
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <span className="blog-date">April 26, 2025</span>
          </div>
          <h3 className="blog-title">
            Successful Blood Donation Drive in Rural Area
          </h3>
          <p className="blog-excerpt">
            Our recent blood donation drive in a rural community collected over 100 units of blood, significantly boosting local supplies.
          </p>
          <a href="#" className="read-more-btn">
            Read More
          </a>
        </div>
      </div>

      <div className="blog-card">
        <div className="blog-image">
          <img src={blogImg2} alt="Blog 2" />
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <span className="blog-date">April 20, 2025</span>
          </div>
          <h3 className="blog-title">
            Partnership with Local Hospital to Improve Blood Storage
          </h3>
          <p className="blog-excerpt">
            We've partnered with a leading hospital to implement advanced blood storage solutions, ensuring longer shelf life and better quality.
          </p>
          <a href="#" className="read-more-btn">
            Read More
          </a>
        </div>
      </div>

      <div className="blog-card">
        <div className="blog-image">
          <img src={blogImg3} alt="Blog 3" />
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <span className="blog-date">April 15, 2025</span>
          </div>
          <h3 className="blog-title">
            New Awareness Campaign Launched to Encourage Youth Donations
          </h3>
          <p className="blog-excerpt">
            Our new campaign targets young adults to raise awareness about the importance of regular blood donations.
          </p>
          <a href="#" className="read-more-btn">
            Read More
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="testimonial-section">
  <div className="container">
    <h2 className="testimonial-title">What Our Donors Say</h2>
    <div className="testimonials-wrapper">
      
      <div className="testimonial-card">
        <p className="testimonial-text">
          "Donating blood through this organization was such a seamless and rewarding experience. Their dedication to saving lives is truly inspiring!"
        </p>
        <div className="testimonial-author">
          <img src="https://i.pravatar.cc/100?img=1" alt="User 1" className="author-img" />
          <div>
            <h4 className="author-name">John Doe</h4>
            <p className="author-role">Regular Donor</p>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <p className="testimonial-text">
          "They make the process of blood donation so easy and accessible. I feel honored to be part of their mission."
        </p>
        <div className="testimonial-author">
          <img src="https://i.pravatar.cc/100?img=2" alt="User 2" className="author-img" />
          <div>
            <h4 className="author-name">Jane Smith</h4>
            <p className="author-role">Community Volunteer</p>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <p className="testimonial-text">
          "Professional, caring, and efficient! The team ensures every donor is well-informed and comfortable."
        </p>
        <div className="testimonial-author">
          <img src="https://i.pravatar.cc/100?img=3" alt="User 3" className="author-img" />
          <div>
            <h4 className="author-name">David Wilson</h4>
            <p className="author-role">First-time Donor</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    </div>
  );
};

export default Drives;
