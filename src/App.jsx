import React from 'react'
import AppRouter from './components/shared/AppRouter/AppRouter'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import store from './common/redux/store';

const custTheme = createTheme({
  palette: {
    primary: {
      main: '#f9a825',
      light: 'primary',
    },
    secondary: {
      main: '#fb8c00',
    },
    warning: {
      main: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(26,26,26,0.54)',
      disabled: 'rgba(47,47,47,0.38)',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={custTheme}>
        <CssBaseline />
          <AppRouter />
      </ThemeProvider>
    </Provider>
  )
}

export default App;