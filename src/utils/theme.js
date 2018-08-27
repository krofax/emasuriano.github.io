const randomItemFromArray = array =>
  array[Math.floor(Math.random() * array.length)];

const pinkPalette = {
  background: '#FFFFFF',
  backgroundDark: '#f0e6f6',

  primary: '#7c37ad',
  primaryLight: '#ae66df',
  primaryDark: '#4b007d',

  secondary: '#ff4081',
  secondaryLight: '#ff79b0',
  secondaryDark: '#c60055',
};

const greenPalette = {
  background: '#FFFFFF',
  backgroundDark: '#e1f4fd',

  primary: '#02a3ee',
  primaryLight: '#65d4ff',
  primaryDark: '#0075bb',

  secondary: '#02eec3',
  secondaryLight: '#6afff6',
  secondaryDark: '#00ba93',
};

const coralPalette = {
  background: '#FFFFFF',
  backgroundDark: '#feebf0',

  primary: '#e63946',
  primaryLight: '#ff7071',
  primaryDark: '#ad001f',
  secondary: '#5ed1f3',
  secondaryLight: '#97ffff',
  secondaryDark: '#0ca0c0',
};

export default {
  colors: randomItemFromArray([pinkPalette, greenPalette, coralPalette]),
};
