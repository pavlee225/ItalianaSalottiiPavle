import React, { Fragment } from "react";
import { Box, Typography, Grid } from "@mui/material";
import HomePageCarousel from "../components/HomePageCarousel";
import stolovi from "../assets/stolovi.jpeg";
import kreveti from "../assets/kreveti.jpeg";
import garniture from "../assets/garniture.jpeg";
import caprice from "../assets/caprice.jpeg";
import sofeSaMehanizmom from "../assets/sofa-sa-mehanizmom.jpeg";
import sofeBezMehanizma from "../assets/sofe-bez-mehanizma.jpeg";
import fotelje from "../assets/fotelje.jpeg";
import CategoryCard from "../components/CategoryCard";
import Container from "@mui/material/Container";

const categories = [
  {
    title: "Garniture",
    image: garniture,
    href: '/product',
  },
  {
    title: "Kreveti",
    image: kreveti,
    href: '/product',
  },
  {
    title: "Stolovi",
    image: stolovi,
    href: '/product',
  },
];

const sofaTypes = [
  {
    title: "Sofe sa mehanizmom",
    image: sofeSaMehanizmom,
    href: '/product',
  },
  {
    title: "Sofe bez mehanizma",
    image: sofeBezMehanizma,
    href: '/product',
  },
  {
    title: "Fotelje i taburei",
    image: fotelje,
    href: '/product',
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <Box sx={{ height: '80vh' }}>
        <HomePageCarousel />
      </Box>
      <Box py={24}>
        <Container maxWidth="xl">
          <Grid container spacing={12} alignItems="center">
            <Grid item md={5}>
              <Typography variant="h2" mb={8}>Nešto generalno</Typography>
              <Typography>
                The added value of our sofas is design - the result of a fine
                balance between Clean, assertive lines, and colours, materials
                and combinations designed to last over time. Comfort is also a
                priority: it comes from our exploration of innovative technical
                solutions and our focus on requirements which may not be
                immediately obvious, but are critically important in order to
                guarantee comfort and well-being.
              </Typography>
            </Grid>
            <Grid item md={7}>
              <Box sx={{ pb: '100%', position: 'relative' }}>
                <img
                  src={caprice}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover", position: 'absolute' }}
                  alt="demo"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid key={index} item md={4} xs={12}>
              <CategoryCard title={category.title} img={category.image} href={category.href} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box py={24}>
        <Container maxWidth="xl">
          <Grid container spacing={12} alignItems="center">
            <Grid item md={7}>
              <Box sx={{ pb: '100%', position: 'relative' }}>
                <img
                  src={caprice}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover", position: 'absolute' }}
                  alt="demo"
                />
              </Box>
            </Grid>
            <Grid item md={5}>
              <Typography variant="h2" mb={8}>Nešto generalno</Typography>
              <Typography>
                The added value of our sofas is design - the result of a fine
                balance between Clean, assertive lines, and colours, materials
                and combinations designed to last over time. Comfort is also a
                priority: it comes from our exploration of innovative technical
                solutions and our focus on requirements which may not be
                immediately obvious, but are critically important in order to
                guarantee comfort and well-being.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box py={16}>
        <Container maxWidth="xl">
          <Typography variant="h2" mb={8}>Garniture</Typography>
          <Grid container spacing={4}>
            {sofaTypes.map((sofa, index) => (
              <Grid key={index} item md={4} xs={12}>
                <CategoryCard title={sofa.title} img={sofa.image} href={sofa.href} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default HomePage;
