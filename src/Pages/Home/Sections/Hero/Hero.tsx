import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";
import Leonor1 from "../../../../assets/Images/Leonor1.png";
import { Button, Container, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

// Styled components fora do componente Hero
const StyleHero = styled("div")(() => ({
  backgroundColor: "black",
  height: "100vh",
}));

const StyleImage = styled("img")(() => ({
  width: "100%",
  borderRadius: "50%",
}));

const Hero = () => {
  return (
    <StyleHero>
    <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <StyleImage src={Leonor1} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography color="primary" variant='h1' textAlign="center">Leonor Pinto</Typography>
            <Typography color="primary" variant='h2' textAlign="center">I'm a Software Engineer</Typography>
            <Grid container display="flex" justifyContent="center" >
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <DownloadIcon/>
                  Download CV
                </Button>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <EmailIcon/>
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyleHero>
  );
};

export default Hero;