import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme1 = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#fff',
    },
    background: {
      default: '#fff',
    },
  },
});

function MyApp({ Component, pageProps }) {


  return (<ThemeProvider theme={theme1} > <Component {...pageProps} /> </ThemeProvider>)
}



export default MyApp
