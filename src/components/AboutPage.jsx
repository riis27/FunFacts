import React from 'react';

function AboutPage() {
  return (
    <div className="page-container">
      <h1>About This Project</h1>
      <p>
        This project aims to showcase the compelling evidence that investing in women and girls leads to substantial economic gains. By providing data-driven insights and visualizations, we hope to demonstrate the importance of gender equality in fostering sustainable economic growth.
      </p>
      <h2>A Deeper Look:</h2>
      <p>
        The information on this app is only a snapshot of all the facts and figures that make a strong case for prioritizing women and girls in today's society. Visit <a href="https://www.unwomen.org/en/what-we-do/economic-empowerment/facts-and-figures" target="_blank" rel="noopener noreferrer">unwomen.org</a> to learn more about the economic impacts of female empowerment.
      </p>
      <img src="https://images.unsplash.com/photo-1598690419800-8100e015ff2c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Women Farmers in Vietnam" className="about-image" />
    </div>
  );
}

export default AboutPage;