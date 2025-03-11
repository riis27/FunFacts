import React from 'react';
import { Link } from 'react-router-dom';

import Fact1 from './Fact1';
import Fact2 from './Fact2';
import Fact3 from './Fact3';
import Fact4 from './Fact4';


function HomePage() {
  return (
    <div className="page-container">
      <h1>Investing in Women and Girls: A Catalyst for Economic Growth</h1>
      <p className="homepage-caption">
        Investing in women and girls is not just a matter of equity; it's a strategic imperative for economic development. When women and girls are empowered, economies thrive. This website highlights key facts demonstrating the significant economic benefits of gender equality.
      </p>

      <div className="fact-preview-container">
        <div className="fact-preview">
          <Link to="/fact1" className="fact-link">
            <h2>Gender Equality and GDP Growth: The Link Between Women's Equality And GDP</h2>
            <Fact1 preview={true} />
            <div className="nav-button">Read More</div>
          </Link>
        </div>
        <div className="fact-preview">
          <Link to="/fact2" className="fact-link">
            <h2>The Economic Argument: Female Workforce Participation Benefits Us All</h2>
            <Fact2 preview={true} />
            <div className="nav-button">Read More</div>
          </Link>
        </div>
        <div className="fact-preview">
          <Link to="/fact3" className="fact-link">
            <h2>Education & Earnings: Female Education Focus Impacts Lifetime Earnings</h2>
            <Fact3 preview={true} />
            <div className="nav-button">Read More</div>
          </Link>
        </div>
        <div className="fact-preview">
          <Link to="/fact4" className="fact-link">
            <h2>Women Leaders of Today & Tomorrow: Supporting Female Entrepreneurship</h2>
            <Fact4 preview={true} />
            <div className="nav-button">Read More</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
