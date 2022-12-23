import {Box, Typography} from "@mui/material";
import React from "react";

interface ThumbnailGalleryProps {
  gallery: {
    label: string;
    image: string;
  }[]
}

const ThumbnailGallery = ({gallery}: ThumbnailGalleryProps) => (
  <Box display="flex" gap={4}>
    {gallery.map((item, index) => (
      <Box key={index} textAlign="center">
        <img width={175} height={175} style={{ objectFit: 'cover' }} src={item.image} alt={item.label}/>
        <Typography variant="body2">{item.label}</Typography>
      </Box>
    ))}
  </Box>
);

export default ThumbnailGallery;
