import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#95c43e',
      contrastText: "#fff"
    },
    secondary: {
      main: '#fa5400',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
