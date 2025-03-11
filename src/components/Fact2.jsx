import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Fact2({ preview }) {
  const data = [
    { name: '20%', Output: 3 },
    { name: '40%', Output: 8 },
    { name: '60%', Output: 15 },
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
          <Bar dataKey="Output" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Fact 2: Female Workforce Participation and Economic Output</h2>
      <p>
        Increasing female workforce participation directly and significantly boosts economic output. When women are employed, they contribute to the labor force, increase productivity, and stimulate consumer spending.
      </p>
      <p>
        A 2023 report by the International Monetary Fund (IMF) emphasizes that reducing gender gaps in labor markets can lead to substantial economic gains. They found that countries with higher female labor force participation rates tend to have stronger economic growth and greater resilience to economic shocks.
      </p>
      <p>
        The World Bank's research also supports this, highlighting that closing gender gaps in employment could increase global GDP significantly. Their studies indicate that greater gender equality in the workforce leads to more efficient allocation of talent and resources, driving economic growth.
      </p>
      <p>
        Furthermore, a study published in the journal "Macroeconomic Dynamics" in 2022 showed that increased female labor force participation is associated with higher levels of innovation and productivity, which are crucial for long-term economic growth.
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
          <Bar dataKey="Output" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="sources">
        <h3>Sources:</h3>
        <ul>
          <li>
            International Monetary Fund (IMF). (2023). <a href="https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2023/03/08/Macroeconomic-Benefits-of-Gender-Equality-529949">Macroeconomic Benefits of Gender Equality.</a>
          </li>
          <li>
            World Bank. (Various reports on gender and development). <a href="https://www.worldbank.org/en/topic/gender">World Bank Gender</a>
          </li>
          <li>
            "Macroeconomic Dynamics." (2022). Research on female labor force participation and productivity.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fact2;