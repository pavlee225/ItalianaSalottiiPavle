import React from "react";
import { Stack, Typography } from "@mui/material";

interface Props {
  title: string;
  text: string;
}

const TextSegment: React.VFC<Props> = ({ text, title }) => (
  <Stack spacing={2}>
    <Typography variant="h5">{title}</Typography>
    <Typography>{text}</Typography>
  </Stack>
);

export default TextSegment;
