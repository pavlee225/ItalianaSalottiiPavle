import { Box, IconButton, Typography } from "@mui/material";
import caprice from "../../assets/caprice.jpeg";
import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FurnitureLight } from "../../pages/admin/ProductDashboardPage";

interface ProductDashboardItemProps {
  // id: string;
  item: FurnitureLight;
  removeSofa: () => void;
  cloneItem: () => void;
  editItem: () => void;
}
const ProductDashboardItem = (props: ProductDashboardItemProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      p={1}
      style={{
        gap: "13px",
        border: "1px solid rgb(33,122,212)",
        borderRadius: "20px",
      }}
      sx={{ mb: 2 }}
    >
      <img
        src={caprice}
        height="150px"
        style={{
          objectFit: "contain",
          borderRadius: "20px",
          border: "2px solid rgb(33,122,212)",
        }}
        alt="pic"
      />
      {/* <p>{props.item.data.data.name}</p> */}
      <Box flex={1}>
        <Typography variant="h5" sx={{ color: "rgb(33,122,212)" }}>
          {props.item.name}
        </Typography>
        <Typography sx={{ color: "red", fontSize: "14px" }}>
          Kategorija: {props.item.category}
        </Typography>
        <Typography align="justify" sx={{ fontSize: "12px", fontWeight: 400 }}>
          {props.item.description}
        </Typography>
      </Box>
      <Box justifySelf="flex-end">
        <IconButton onClick={props.editItem} sx={{ color: "rgb(33,122,212)" }}>
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={props.removeSofa}
          sx={{ color: "rgb(33,122,212)" }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={props.cloneItem} sx={{ color: "rgb(33,122,212)" }}>
          <ContentCopyIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductDashboardItem;
