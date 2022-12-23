import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import HomePageCarousel from "../components/HomePageCarousel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryCard from "../components/CategoryCard";
import garniture from "../assets/garniture.jpeg";
import kreveti from "../assets/kreveti.jpeg";
import stolovi from "../assets/stolovi.jpeg";
import jela from "../assets/materials/jela.jpeg";
import pine from "../assets/materials/pine.jpeg";
import walnut from "../assets/materials/walnut.jpeg";
import oak from "../assets/materials/oak.jpeg";
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/free-mode";
import ThumbnailGallery from "../components/ThumbnailGallery";

const sofa = {
  name: "Garnitura",
  description: [
    { label: "Typology", text: "Modular sofa" },
    {
      label: "Structure",
      text: "Wood and by-products",
    },
    {
      label: "Backrest",
      text: "Moulded flexible polyurethane",
    },
    {
      label: "Seat cushion",
      text: "Multi-density polyurethane",
    },
    {
      label: "Pre-cover",
      text: "White cotton and feather",
    },
    {
      label: "Final cover",
      text: "White cotton and feather",
    },
    {
      label: "Feet",
      text: "Adjustable in painted metal",
    },
    {
      label: "Backrest cushions",
      text: "Expanded polyurethane and feather",
    },
    {
      label: "Headrest cushions",
      text: "Textured and feather",
    },
    {
      label: "Optional cushions",
      text: "Textured and feather",
    },
  ],
  materials: [
    {
      label: 'Jela',
      image: jela,
    },
    {
      label: 'Bor',
      image: pine,
    },
    {
      label: 'Orah',
      image: walnut,
    },
    {
      label: 'Hrast',
      image: oak,
    },
  ]
};

export const categories = [
  {
    title: "Malto",
    image: garniture,
    href: '/product',
  },
  {
    title: "Alto",
    image: kreveti,
    href: '/product',
  },
  {
    title: "Balto",
    image: stolovi,
    href: '/product',
  },
  {
    title: "Malto",
    image: garniture,
    href: '/product',
  },
  {
    title: "Alto",
    image: kreveti,
    href: '/product',
  },
  {
    title: "Balto",
    image: stolovi,
    href: '/product',
  },
  {
    title: "Malto",
    image: garniture,
    href: '/product',
  },
  {
    title: "Alto",
    image: kreveti,
    href: '/product',
  },
  {
    title: "Balto",
    image: stolovi,
    href: '/product',
  },
  {
    title: "Malto",
    image: garniture,
    href: '/product',
  },
  {
    title: "Alto",
    image: kreveti,
    href: '/product',
  },
  {
    title: "Balto",
    image: stolovi,
    href: '/product',
  },
];

const ProductPage = () => {
  return (
    <div>
      <Box mt={8} py={8}>
        <Container maxWidth="xl">
          <Typography variant="h1" mb={8}>Garnitura</Typography>
          <Grid container spacing={8}>
            <Grid item md={6} xs={12}>
              <HomePageCarousel />
            </Grid>
            <Grid item md={6} xs={12}>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableBody>
                    {sofa.description.map((row) => (
                      <TableRow
                        key={row.label}
                      >
                        <TableCell sx={{ border: 0, color: 'text.secondary' }} align="left">{row.label}</TableCell>
                        <TableCell sx={{ border: 0 }} align="left">{row.text}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="xl">
          <Accordion sx={{ py: 1 }} elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Dimenzije</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ThumbnailGallery gallery={sofa.materials} />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ py: 1 }} elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Box>
                <Typography gutterBottom>Nogice</Typography>
                <Typography variant="body2" color="textSecondary">Ovde mozete pogledati sve opcije boja nogica</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <ThumbnailGallery gallery={sofa.materials} />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ py: 1 }} elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Materijal</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ThumbnailGallery gallery={sofa.materials} />
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>

      <Box py={16}>
        <Container maxWidth={false} disableGutters>
          <Typography variant="h3" textAlign="center" mb={12}>
            Slični proizvodi
          </Typography>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={60}
            initialSlide={3}
          >
            {categories.map((c, index) => (
              <SwiperSlide style={{ maxWidth: 'min-content' }} key={index}>
                <CategoryCard title={c.title} img={c.image} href={c.href} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </div>
  );
};

export default ProductPage;
