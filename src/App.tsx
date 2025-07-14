import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Home from './Pages/Home/Home';
import About from './Pages/Home/Sections/About/About';
import theme from './theme';
import Skills from './Pages/Home/Sections/Skills/Skills';
import ProjectsSection from './Pages/Home/Sections/Project/Project';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
         <Box id="home">  {/* No NavBar, quando clica em "Home" premite ir diretamente para baixo ou cima*/}
        <Home />
        </Box>
        <Box id="about"> 
          <About />
        </Box>

        <Box id="skills"> 
          <Skills />
        </Box>

         <Box id="projects"> 
          <ProjectsSection />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;