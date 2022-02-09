import * as React from 'react';
import './App.css';
import { createMuiTheme, Paper, ThemeProvider} from '@mui/material';
import { Container } from '@mui/material';
import ButtonAppBar from './components/AppBar';
import CustomizedDialogs from './components/DialogPopup';

const theme = createMuiTheme({
      palette: {
        primary:{
           main: '#222',
        },
      },
      typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
      }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
     
        <div className="App" >
            <ButtonAppBar />
        </div>

        <Container sx={{
           maxWidth: '400px',
           margin: 'auto,'
        }}>
            <Paper sx={{
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: 'primary.dark',
              height: '550px',
              width: '100px,'
            }}>
             <CustomizedDialogs />
            </Paper>  
        </Container>
      </ThemeProvider>
  );
}

export default App;