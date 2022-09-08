
const aaMW = {
  A: 71.037113805,
  R: 156.10111105,
  N: 114.04292747,
  D: 115.026943065,
  C: 103.009184505,
  E: 129.042593,
  Q: 128.05857754,
  G: 57.021463735,
  H: 137.058911875,
  I: 113.084064015,
  L: 113.084064015,
  K: 128.09496305,
  M: 131.040484645,
  F: 147.068414,
  P: 97.052764,
  S: 87.032028,
  T: 101.047679,
  W: 186.079313,
  Y: 163.063329,
  V: 99.068414,
};

export const computeMW = (protein) => {

  // convert to array
  const proteinArray = Array.from(protein);

  // calc MW
  let proteinMW = 0;
  proteinArray.forEach((pos) => {
    proteinMW += aaMW[pos];
  });
  const waterMW = 18.0107946;
  return proteinMW+waterMW;
};
