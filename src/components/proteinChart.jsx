import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  LabelList,
} from 'recharts';
import {
  countAAsOneLetter,
  countAAsThreeLetter,
} from '../functions/proteinBarChartCounts';

export const ProteinChart = ({ outFormat, protein }) => {
  // update proteinAACounts when outFormat or protein changes
  useEffect(() => {
    setproteinAACounts(
      outFormat === 'threeLetter'
        ? countAAsThreeLetter(protein)
        : countAAsOneLetter(protein)
    );
  }, [protein, outFormat]);

  // protein for chart
  const [proteinAACounts, setproteinAACounts] = useState(
    countAAsThreeLetter(protein)
  );

// custom tooltip
  const proteinChartToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded custom-tooltip bg-orange-400/50">
          <p className="label ">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };


  const proteinBar = (
    <BarChart data={proteinAACounts} width={800} height={150}>
      <Bar dataKey="count" fill="#f97316">
        <LabelList dataKey="count" position="top"></LabelList>
      </Bar>

      <XAxis dataKey="resi" fontSize="0.9rem" stroke="black"></XAxis>
      <YAxis fontSize="0.9rem" stroke="black">
        <Label
          value="AA ratio"
          angle="-90"
          position="insideBottomLeft"
          fontSize="1rem"
        ></Label>
      </YAxis>
      <Tooltip content={proteinChartToolTip} cursor={{fill: "#fb923c", opacity: 0.5}} />
    </BarChart>
  );

 

  return <div className="m-auto hidden lg:block xl:inline-flex">{proteinBar}</div>;
};
