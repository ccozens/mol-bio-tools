import React from 'react';
import { ResponsiveBar } from "@nivo/bar";

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  export const nivoBar = () => {
    return (
    <div style={styles}>
      <h1>Nivo basic demo</h1>
    
    </div>
  )};