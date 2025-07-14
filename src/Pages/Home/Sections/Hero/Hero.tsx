import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";
import Leonor1 from "../../../../assets/Images/Leonor1.png";
import { Box, Container, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../../components/styledbutton/StyeledButton';
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground';
import PhoneIcon from '@mui/icons-material/Phone';


const StyleHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {  // mobile
  
    paddingTop: "100px",
  },
  [theme.breakpoints.up("md")]: {  // computer
   
    paddingTop: "0px",
  },
}));



const StyleImage = styled("img")(({ theme }) => ({
  width: "80%",
  borderRadius: "50%",
  border:`3px solid ${theme.palette.primary.contrastText}`, 
}));

const Hero = () => {
 
  return (
    <StyleHero>
    <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position={"relative"} >
              <Box position="absolute" width={"200%"} top={-100} right={0}>
                <AnimatedBackground/>
              </Box>
              <Box position="relative" textAlign="center">
              <StyleImage src={Leonor1} />
              </Box>

            </Box>
            
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant='h1' textAlign="center" pb={2}>Leonor Pinto</Typography>
            <Typography color="primary.contrastText" variant='h2' textAlign="center">I'm a Software Engineer</Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pb={3} >
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={()=> {
                  const link= document.createElement('a');
                  link.href = "/CV/Leonor Pinto.pdf";
                  link.download = "Leonor Pinto.pdf";
                  link.click();
                }}>
                  <DownloadIcon/>
                  <Typography>

                     Download CV
                  </Typography>
                 
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
              <StyledButton onClick={() => {
                  window.location.href = 'mailto:leonortpinto434@gmail.com?subject=Contato%20pelo%20Portfolio&body=Olá%20Leonor,%20gostaria%20de%20entrar%20em%20contato...';
                }}>
                  <EmailIcon/>
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => {
                  window.open('https://wa.me/933823963?text=Olá%20Leonor,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar', '_blank');
                }}>
                  <PhoneIcon/>
                  <Typography>WhatsApp</Typography>


                </StyledButton>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyleHero>
  );
};

export default Hero;