import React from "react";
import {Box, Link, Stack, Typography} from "@mui/material";
// @ts-ignore
import { Image } from "mui-image";

interface Props {
  href: string;
  title: string;
  img: string;
}

const CategoryCard: React.FC<Props> = ({ href, title, img }) => (
  <Link href={href}>
    <Stack
      maxWidth="min-content"
      spacing={2}
      onClick={() => {}}
      justifyContent="center"
      sx={{
        'img': {
          transition: 'transform ease-in-out .15s'
        },
        '& :hover': {
          'img': {
            transform: 'scale(1.05)',
          }
        }
      }}
    >
      <Box height={400} overflow="hidden" width={400}>
        <img style={{ objectFit: 'cover' }} src={img} height="100%" width="100%" alt={title} />
      </Box>
      <Typography textAlign="center" component="h3" variant="h5">
        {title}
      </Typography>
    </Stack>
  </Link>

);

export default CategoryCard;
