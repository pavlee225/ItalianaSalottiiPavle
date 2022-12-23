import React from "react";
import { Stack, Typography } from "@mui/material";

interface Props {
  option: string;
  img: string;
}

const ImageOption: React.VFC<Props> = ({ option, img }) => {
  return (
    <Stack spacing={2} width="170px" alignItems="center">
      <img src={img} height="150px" width="150px" alt="placeholder" />
      <Typography textAlign="center" component="h6" variant="h5">
        {option}
      </Typography>
    </Stack>
  );
};

export default ImageOption;
