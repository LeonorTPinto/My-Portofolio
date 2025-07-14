import React from "react";
import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../styledbutton/StyeledButton"; 

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string;
    technologies: string;
    websiteURL: string;
    codeURL: string;
}

// Movidos para fora da função (melhor performance)
const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    objectFit: "contain",
    height: "80vw",
   marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
        height: "45vh",
    },
}));

const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "3px",
    border: `0.5px solid ${theme.palette.primary.contrastText}`,
    backgroundColor: "transparent",
    color: theme.palette.primary.contrastText,
    padding: "20px",
    '&:hover': {
        backgroundColor: theme.palette.primary.light
    }
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {
    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography>
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} alt={title} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2} justifyContent="center">
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <StyledButton onClick={() => window.open(codeURL, '_blank')}>
                        View Code
                    </StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    );
};

export default ProjectCard;