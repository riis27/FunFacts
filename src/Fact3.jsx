import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Fact3({ preview }) {
  const data = [
    { name: '6 Years', Earnings: 5 },
    { name: '9 Years', Earnings: 12 },
    { name: '12 Years', Earnings: 20 },
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
          <Bar dataKey="Earnings" fill="#ffc658" />
        </BarChart>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Fact 3: Education and Lifetime Earnings</h2>
      <p>
        Prioritizing the education of women and girls significantly benefits their lifetime earnings. Increased educational attainment leads to better job opportunities, higher wages, and greater economic empowerment.
      </p>
      <p>
        A 2021 report by the World Bank highlighted that each additional year of schooling can increase a woman’s earnings by 10-20%. This not only improves individual economic prospects but also contributes to broader economic growth and poverty reduction.
      </p>
      <p>
        UNESCO's research further emphasizes the positive correlation between girls' education and economic outcomes. Their studies indicate that educated women are more likely to participate in the formal labor market, earn higher incomes, and invest in their families' health and education.
      </p>
      <p>
        A 2022 study published in the "Journal of Development Economics" found that investing in girls' education leads to long-term economic benefits, including higher productivity, increased innovation, and improved social outcomes.
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
          <Bar dataKey="Earnings" fill="#ffc658" />
        </BarChart>
      </div>
      <div className="sources">
        <h3>Sources:</h3>
        <ul>
          <li>
            World Bank. (2021). <a href="https://www.worldbank.org/en/topic/girlseducation">Girls' Education</a>.
          </li>
          <li>
            UNESCO. (Various reports on girls' education). <a href="https://en.unesco.org/themes/education-and-gender-equality">Education and Gender Equality</a>.
          </li>
          <li>
            "Journal of Development Economics." (2022). Research on girls' education and economic outcomes.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fact3;