import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from "./utils/themes";
import Herosection from './components/Herosection';
import Skills from './components/Skills';
import Navbar from './components/navbar';
import Contact from "./components/Contact";
import Education from './components/Education';
import Footer from './components/Footer';
import Experience from './components/Experience'
import Projects from './components/Projects'
import { BrowserRouter as Router } from 'react-router-dom';

const Body=styled.div`
  background-color: ${({theme})=>theme.bg};
  width:100%;
  height:100%;
  overflow-x:hidden;
  `;

  const Wrapper = styled.div`
  background: linear-gradient(143.7deg, rgba(237, 7, 107, 0.15) 0%, rgba(237, 7, 107, 0) 50%), linear-gradient(38.73deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 100%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body>
        <Herosection/>
        <Wrapper><Skills/><Projects/></Wrapper>
        <Wrapper><Experience/></Wrapper>
        <Wrapper><Education/></Wrapper>
        <Wrapper><Contact/></Wrapper>

          <Footer/>
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
