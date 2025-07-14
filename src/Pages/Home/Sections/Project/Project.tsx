import React from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8, 0),
}));

const ProjectsSection: React.FC = () => {
    const projects: ProjectCardProps[] = [
        {
            title: "Bila Market",
            subtitle: "Fev 2025 - Maio 2025",
            srcImg: "/Images/BilaMarket.png", // ← Corrigido: removi "/public"
            description: "Este projeto é uma plataforma web desenvolvida para apoiar o comércio local em Vila Real, Portugal. O Bila Market visa conectar consumidores e pequenas empresas através de uma aplicação amigável que inclui funcionalidades como pesquisa de produtos, reservas online, gestão de campanhas promocionais e notificações em tempo real. O projeto responde à crescente necessidade de inclusão digital no comércio local, cada vez mais ofuscado por plataformas globais de e-commerce",
            technologies: "Technologies: JavaScript, HTML, CSS, .NET C#",
            websiteURL: "",
            codeURL: "https://github.com/leonorpinto4/BilaMarket",
        },
    ];

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box pt={5} pb={3}>
                    <Typography 
                        variant="h3" 
                        textAlign="center" 
                        color="primary.contrastText"
                        sx={{ fontWeight: 'bold' }}
                    >
                        Projects
                    </Typography>
                </Box>
                <Grid 
                    container 
                    spacing={5} 
                    pb={3}
                    justifyContent="center" // ← Centraliza os itens
                >
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item xs={12} md={6} key={index}> {/* ← Adicionado xs={12} */}
                            <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    );
};

export default ProjectsSection;