import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Fact1({ preview }) {
  const data = [
    { name: 'Low Equality', GDP: 1.0 },
    { name: 'Medium Equality', GDP: 2.0 },
    { name: 'High Equality', GDP: 3.5 },
  ];

  if (preview) {
    return (
      <div className="chart-container preview">
        <BarChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="GDP" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Fact 1: Gender Equality and GDP Growth</h2>
      <p>
        Countries with higher gender equality indices experience significantly higher GDP growth rates. Studies have shown that closing the gender gap can lead to substantial economic gains.
      </p>
      <p>
        According to a report by McKinsey Global Institute, advancing women’s equality could add $12 trillion to global GDP by 2025. This increase is attributed to factors like higher female labor force participation, increased productivity, and enhanced consumer spending.
      </p>
      <p>
        Furthermore, the OECD's research indicates that reducing gender gaps in labor force participation could lead to significant increases in GDP per capita. For example, countries with higher gender equality tend to have more diverse and inclusive workforces, fostering innovation and better decision-making.
      </p>
      <p>
        The International Monetary Fund (IMF) also highlights the positive correlation between gender equality and economic growth. Their studies suggest that policies promoting gender equality, such as equal pay and access to education, can boost economic performance.
      </p>
      <p>
        Data represented in this chart is a simplified representation of the general trend, and does not represent specific data from a single source.
      </p>
      <div className="chart-container">
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="GDP" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className='sources'>
        <h3>Sources:</h3>
        <ul>
          <li>
            McKinsey Global Institute. (2015). <a href="https://www.mckinsey.com/featured-insights/employment-and-growth/the-power-of-parity-how-advancing-womens-equality-can-add-12-trillion-to-global-growth">The power of parity: How advancing women’s equality can add $12 trillion to global growth.</a>
          </li>
          <li>
            OECD. (Various reports on gender equality and economic growth). <a href="https://www.oecd.org/gender/">OECD Gender Portal</a>
          </li>
          <li>
            International Monetary Fund (IMF). (Various publications on gender and the economy). <a href="https://www.imf.org/en/Topics/gender">IMF Gender Topics</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fact1;