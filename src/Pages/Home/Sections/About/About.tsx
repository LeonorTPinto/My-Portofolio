import React from "react";
import { Container, Grid, Typography, styled, Card, CardContent, Fade, Box } from "@mui/material";

const StyledSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[50],
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  }
}));

const About: React.FC = () => {
  return (
    <StyledSection>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Typography 
                variant="h3" 
                textAlign="center" 
                mb={6}
                sx={{ 
                  fontWeight: 'bold',
                  color: 'primary.main',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 60,
                    height: 4,
                    backgroundColor: 'secondary.main',
                    borderRadius: 2,
                  }
                }}
              >
                About Me
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <StyledCard>
                <CardContent>
                                   
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      color: 'text.primary',
                      mb: 3
                    }}
                  >
                   Olá! Sou estudante de Mestrado em Engenharia Informática, com um forte interesse em desenvolvimento de software e gestão de projetos.

Desde a licenciatura, tenho explorado diversas áreas da informática, com especial enfoque na programação de aplicações e no desenvolvimento web.

Estou constantemente à procura de novos desafios e oportunidades para aplicar os meus conhecimentos em contextos reais. Valorizo o trabalho em equipa, a resolução de problemas complexos e a aprendizagem contínua.

Tenho experiência em linguagens como Python, .NET C#, HTML, CSS e React, bem como em ferramentas como Git.

Acredito que a tecnologia deve ser funcional, eficiente e centrada nas pessoas.
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      color: 'text.secondary'
                    }}
                  >
                    Sempre em busca de novas tecnologias e desafios, acredito que a 
                    programação é uma forma de arte que combina lógica e criatividade 
                    para resolver problemas reais.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </StyledSection>
  );
};

export default About;