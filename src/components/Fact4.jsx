import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Fact4({ preview }) {
  const data = [
    { name: 'Low Support', Growth: 5 },
    { name: 'Medium Support', Growth: 15 },
    { name: 'High Support', Growth: 25 },
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
          <Bar dataKey="Growth" fill="#de8450" />
        </BarChart>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Fact 4: Female Entrepreneurship and Leadership</h2>
      <p>
        Prioritizing female entrepreneurship and leadership creates better outcomes in business and drives significant economic growth. When women lead, businesses tend to be more innovative, inclusive, and profitable.
      </p>
      <p>
        A 2023 report by the Boston Consulting Group (BCG) found that startups founded and co-founded by women generate 10% more cumulative revenue over five years than those founded by men. This demonstrates the efficiency and profitability of female-led businesses.
      </p>
      <p>
        The International Finance Corporation (IFC), a member of the World Bank Group, emphasizes that companies with more women in leadership positions perform better financially. Their research indicates that gender diversity on boards and in senior management leads to improved decision-making and better risk management.
      </p>
      <p>
        A 2022 study published in the "Strategic Management Journal" highlighted that female leadership is associated with increased innovation and adaptability, which are crucial for businesses to thrive in dynamic markets.
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
          <Bar dataKey="Growth" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="sources">
        <h3>Sources:</h3>
        <ul>
          <li>
            Boston Consulting Group (BCG). (2023). <a href="https://www.bcg.com/publications/2023/why-female-founded-startups-are-a-better-bet">Why Female-Founded Startups Are a Better Bet.</a>
          </li>
          <li>
            International Finance Corporation (IFC). (Various reports on gender diversity and business performance). <a href="https://www.ifc.org/wps/wcm/connect/topics_ext_content/ifc_external_corporate_site/sustainability-at-ifc/publications/publications_report_women-and-business">Women and Business</a>.
          </li>
          <li>
            "Strategic Management Journal." (2022). Research on female leadership and innovation.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fact4;