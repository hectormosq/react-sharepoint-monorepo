const { loadTheme } = require('office-ui-fabric-react');

declare var window: any;


const defaultTheme = {
  black: '#434343',
  neutralDark: '#5b5b5b',
  neutralLight: '#dadada',
  neutralLighter: '#e3e3e3',
  neutralLighterAlt: '#e7e7e7',
  neutralPrimary: '#777777',
  neutralPrimaryAlt: '#888888',
  neutralQuaternary: '#c2c2c2',
  neutralQuaternaryAlt: '#cbcbcb',
  neutralSecondary: '#aeaeae',
  neutralTertiary: '#d6d6d6',
  neutralTertiaryAlt: '#bababa',
  themeDark: '#a31422',
  themeDarkAlt: '#c11728',
  themeDarker: '#780e19',
  themeLight: '#f3b3b9',
  themeLighter: '#f8d5d9',
  themeLighterAlt: '#fdf4f5',
  themePrimary: '#d7192d',
  themeSecondary: '#db3142',
  themeTertiary: '#e76d79',
  white: '#ffffff',
};

export default loadTheme({
  palette: window && window.__themeState__ && window.__themeState__.theme ? window.__themeState__.theme : defaultTheme,
});
