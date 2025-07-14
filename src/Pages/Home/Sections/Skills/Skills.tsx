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


const Skills: React.FC = () => {
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
                Skills
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={2}>
              <StyledCard>
                <CardContent>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      color: 'text.secondary'
                    }}
                  >
                   HTML
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
                <Grid item xs={12} md={2}>
              <StyledCard>
                <CardContent>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      color: 'text.secondary'
                    }}
                  >
                   CSS
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

    <Grid item xs={12} md={2}>
              <StyledCard>
                <CardContent>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      color: 'text.secondary'
                    }}
                  >
                   JavaScript
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

                <Grid item xs={12} md={2}>
              <StyledCard>
                <CardContent>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      color: 'text.secondary'
                    }}
                  >
               React
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
                    
    <Grid item xs={12} md={2}>
              <StyledCard>
                <CardContent>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      color: 'text.secondary'
                    }}
                  >
                  .NET C#
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

          </Grid>
        </Fade>
      </Container>
    </StyledSection>
  );
}

export default Skills;