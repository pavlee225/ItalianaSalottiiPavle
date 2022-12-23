import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.900",
        color: "grey.100",
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography variant="h6" noWrap component="div">
              LOGO
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Link href="https://www.instagram.com/italianasalotti/">
                Instagram
              </Link>
              <Link href="https://www.facebook.com/italianasalotti/">
                Facebook
              </Link>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Link href="#">Kolekcije</Link>
              <Link href="#">O Nama</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
