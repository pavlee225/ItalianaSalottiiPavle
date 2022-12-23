import ProductDashboardItem from "../../components/admin/ProductDashboardItem";
import {
  Box,
  Button,
  Container,
  Drawer,
  Typography,
  Grid,
  Menu,
  MenuItem,
  Chip,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useModal from "../../hooks/useModal";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { Theme, useTheme } from "@mui/material/styles";
// import {
//   FurnitureType,
//   getFurnitureDefaultItem,
//   SofaFurniture,
// } from "../../Furniture";
import React, { useState, useEffect, useMemo } from "react";
// import { database } from "../../firebaseConfig";
// import { useCallback } from "react";
// import { useDropzone } from "react-dropzone";
import RHFTextInput from "../../components/admin/inputs/RHFTextInput";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { filter } from "lodash";
import {
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
// import { DataGrid } from '@mui/x-data-grid';

// import { useContext } from "react";
// import { ProductContext } from "../../store/products-context";
// import ProductsList from '../../components/admin/ProductsList';
// import { TextField } from "@mui/material";
import { productsCollectionRef } from "../../hooks-pavle/firestore.collections";
import { db } from "../../hooks-pavle/init-firebase";
import { categoriesCollectionRef } from "../../hooks-pavle/firestore.collections";
// import { getDocs, collection } from 'firebase/firestore';

// const useStyles = makeStyles(() => ({
//   root: {
//     "& .MuiFormHelperText-root": {
//       color: "#d32f2f",
//     },
//   },
// }));
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 5;
const names = ["Garnitura", "Fotelja"];
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export interface FurnitureLight {
  id: string;
  name: string;
  description: string;
  category: string;
}
// export interface FurnitureLight {
//   id: string;
//   data: DocumentData;
// }
function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ProductDashboardPage = () => {
  // const classes = useStyles();
  const theme = useTheme();
  const modal = useModal();
  // const methods = useForm<FurnitureLight>({
  //   defaultValues: {
  //     name: "",
  //     description: "",
  //     category: "",
  //   },
  // });
  const methods = useForm<FurnitureLight>({});
  //{defaultValues: getFurnitureDefaultItem(FurnitureType.SOFA) as SofaFurniture,}

  const [sofaList, setsofaList] = useState<FurnitureLight[]>([]);
  // const [sofaList2, setsofaList2] = useState<FurnitureLight2[]>([]);
  const [editingItem, seteditingItem] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [sortState, setsortState] = useState("");
  // const [currentFilter, setcurrentFilter] = useState<string>();
  // const [garnituraChecked, setgarnituraChecked] = useState(false);
  // const [foteljaChecked, setfoteljaChecked] = useState(false);
  const [filters, setfilters] = useState<string[]>([]);
  // const [showList, setshowList] = useState(true);

  const open = Boolean(anchorEl);

  // useEffect(() => {
  //   console.log(methods.formState);
  // }, [methods]);

  useEffect(() => {
    const unsubsribe = onSnapshot(productsCollectionRef, (snapshot) => {
      setsofaList(
        snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as FurnitureLight)
        )
      );
    });
    const unsubscribeCategories = onSnapshot(
      categoriesCollectionRef,
      (snapshot) => {
        setfilters(
          snapshot.docs.map((doc) => {
            return doc.data().name;
          })
        );
      }
    );
    return () => {
      unsubsribe();
      unsubscribeCategories();
    };
  }, []);

  const onAddFurniture = (data: FurnitureLight) => {
    if (data.id) {
      // const sofaIndex = sofaList.findIndex((obj) => obj.id === data.id);
      // sofaList[sofaIndex] = data;
      // setsofaList(sofaList);
      const productsRef = doc(db, "products-pavle", data.id);
      console.log(data.id);
      updateDoc(productsRef, {
        name: data.name,
        description: data.description,
        category: data.category,
      });
      seteditingItem(false);
      methods.reset();
    } else {
      // data.id = new Date().getUTCMilliseconds();
      methods.reset();
      addDoc(productsCollectionRef, data)
        .then((response) => {
          console.log(response.id);
        })
        .catch((error) => console.log(error.message));
      seteditingItem(false);
      // setsofaList((prevList) => [...prevList, data]);
    }
    // const newSofa = sofaList.find((obj) => obj.name === data.name);
    // if (ExistingSofa?.id === data.id) {
    //   console.log("sofa postoji");
    //   return;
    // } else {
    //   data.id = new Date().getUTCMilliseconds();
    // }
    // console.log(sofaList);
    // methods.setValue("name", "");
    // methods.setValue("description", "");
    methods.setValue("name", "");
    methods.setValue("description", "");
    methods.setValue("category", "");
    modal.closeModal();
    // seteditingItem(false);
    // processFile(data, addProduct, path)
    // seteditingItem(!editingItem);
  };

  const removeSofa = (id: string) => {
    // setsofaList((prevList) => {
    //   return prevList.filter((item1) => item1.id !== id);
    // });
    deleteDoc(doc(db, "products-pavle", id));
  };

  const cloneItem = (item: FurnitureLight) => {
    // let pom = new Date().getUTCMilliseconds();
    // let pom = (Math.random() + 1).toString(36).substring(7);
    // setsofaList((prevList) => {
    //   return [
    //     ...prevList,
    //     {
    //       data: item,
    //     },
    //   ];
    // });
    addDoc(productsCollectionRef, {
      name: item.name,
      description: item.description,
      category: item.category,
    });
  };
  const editItem = (item: FurnitureLight) => {
    modal.openModal();
    methods.setValue("name", item.name);
    methods.setValue("description", item.description);
    methods.setValue("id", item.id);
    methods.setValue("category", item.category);
    seteditingItem(true);
    //============================================================
    // setExistingSofa(item);
    // const newSofa = sofaList.find((obj) => {
    //   if (obj.id === item.id) {
    //     return {
    //       id: item.id,
    //       name: item.name,
    //       description: item.description,
    //     };
    //   }
    // });
    // setExistingSofa({
    //   id: item.id,
    //   name: methods.getValues("name"),
    //   description: methods.getValues("description"),
    // });
    // setsofaList((prevList) => {
    //   return [...prevList, newSofa];
    // });
  };
  // const onDrop = useCallback(
  //   (acceptedFiles: File[]) => {
  //     // Do something with the files
  //     methods.setValue("images", acceptedFiles);
  //   },
  //   [methods]
  // );

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop,
  //   noClick: true,
  // });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseChip = () => {
    setsortState("");
  };

  const sort = (sortingParam: string) => {
    setsortState(sortingParam);
    setAnchorEl(null);
  };

  // const sortedList = useMemo(() => {
  //   if (sortState === "asc") {
  //     setshowChip("Sorted by name A-Z");
  //     return sofaList.sort((a, b) => (a.name > b.name ? 1 : -1));
  //   } else if (sortState === "desc") {
  //     setshowChip("Sorted by name Z-A");
  //     return sofaList.sort((a, b) => (a.name > b.name ? -1 : 1));
  //   } else return sofaList;
  // }, [sofaList, sortState]);

  const handleChangeCheck = (event: SelectChangeEvent<typeof filters>) => {
    const {
      target: { value },
    } = event;
    setfilters(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const filteredList = useMemo(() => {
    // return sofaList.filter((sofa) => filters.includes(sofa.category));
    // if (currentFilter === "Garnitura") {
    //   return sofaList.filter((sofa) => sofa.category === "Garnitura");
    // } else if (currentFilter === "Fotelja") {
    //   return sofaList.filter((sofa) => sofa.category === "Fotelja");
    // } else return sofaList;
    let tempList = sofaList;
    if (filters.length > 0) {
      tempList = sofaList.filter((sofa) => filters.includes(sofa.category));
    }
    if (sortState !== "") {
      tempList = sofaList.slice().sort((a, b) => {
        if (sortState === "asc") {
          return a.name > b.name ? 1 : -1;
        } else {
          return a.name > b.name ? -1 : 1;
        }
      });
    }
    return tempList;
    //=========================================================================================
  }, [sofaList, filters, sortState]);

  return (
    <Container sx={{ marginLeft: "300px", marginRight: "300px" }}>
      <Container sx={{ mt: "25px", mb: "50px" }}>
        {/* <Box sx={{ height: "150px" }}>
          <p> Filter </p> */}
        {/* <label style={{ fontSize: "15px" }}> Garnitura </label>
          <input type="checkbox" value="Garnitura" onChange={handleChangeCheck} />
          <label style={{ fontSize: "15px" }}> Fotelja </label>
          <input type="checkbox" onChange={handleChangeCheck} /> */}
        {/* <div>
            <label> Garnitura </label>
            <Checkbox value="Garnitura" onChange={handleChangeCheck} />
            <label> Fotelja </label>
            <Checkbox value="Fotelja" onChange={handleChangeCheck} />
          </div>
        </Box> */}

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "25px",
            }}
          >
            <Box>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Sortiraj
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => sort("asc")}>
                  Sortiraj po nazivu A-Z
                </MenuItem>
                <MenuItem onClick={() => sort("desc")}>
                  Sortiraj po nazivu Z-A
                </MenuItem>
              </Menu>
              {sortState !== "" && (
                <Chip
                  label={
                    sortState === "asc"
                      ? "Sorted by name A-Z"
                      : "Sorted by name Z-A"
                  }
                  onDelete={handleCloseChip}
                />
              )}
            </Box>
            <Button
              onClick={modal.openModal}
              sx={{ border: "2px solid rgb(33,122,212)" }}
              endIcon={<AddCircleOutlineIcon />}
            >
              Dodaj model
            </Button>
          </Box>
        </Box>
      </Container>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={12}
        sx={{ flexDirection: "row", flexWrap: "wrap" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 0,
            flexBasis: "5rem",
          }}
        >
          <FormControl sx={{ m: 1, width: 200 }} size="small">
            <InputLabel id="multiple-check-label">Filter</InputLabel>
            <Select
              labelId="multiple-check-label"
              id="multiple-check"
              multiple
              value={filters}
              onChange={handleChangeCheck}
              input={<OutlinedInput id="select-multiple-chip" label="Filter" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, filters, theme)}
                  sx={{ width: "150px" }}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {/* {!currentFilter &&
            sortedList.map((item) => (
              <Grid item lg={6} md={12} sm={12} key={item.id}>
                <ProductDashboardItem
                  id={item.id}
                  item={item}
                  removeSofa={removeSofa.bind(null, item.id)}
                  cloneItem={cloneItem.bind(null, item)}
                  editItem={() => editItem(item)}
                />
              </Grid>
            ))} */}
        <Grid
          container
          spacing={2}
          sx={{ flexWrap: "wrap", flex: 1, minInlineSize: "10%" }}
        >
          {filteredList.map((item) => (
            <Grid item lg={12} md={12} sm={12} key={item.id}>
              <ProductDashboardItem
                // id={item.id}
                key={item.id}
                item={item}
                removeSofa={removeSofa.bind(null, item.id)}
                cloneItem={cloneItem.bind(null, item)}
                editItem={() => editItem(item)}
              />
            </Grid>
          ))}
          {/* <ProductDashboardItem /> */}
        </Grid>
      </Grid>

      <Drawer anchor="right" open={modal.isOpen} onClose={modal.closeModal}>
        <Box m={10} flex={1} width="500px">
          {editingItem && (
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "rgb(33,122,212)" }}
            >
              Izmena postojeceg modela
            </Typography>
          )}

          {!editingItem && (
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "rgb(33,122,212)" }}
            >
              Dodavanje novog modela
            </Typography>
          )}

          <Box
            style={{ height: "100%" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <FormProvider {...methods}>
              <form
                id="user-form"
                onSubmit={methods.handleSubmit(onAddFurniture)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <RHFTextInput name="name" />
                <RHFTextInput name="description" />
                {editingItem && <RHFTextInput name="id" />}
                <FormControl fullWidth>
                  <InputLabel id="input-result-label">kategorija</InputLabel>
                  <Controller
                    name="category"
                    rules={{
                      required: "Ovo polje je obavezno",
                    }}
                    defaultValue="Garnitura"
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="kategorija"
                        style={{ marginBottom: 15 }}
                        // defaultValue="Garnitura"
                      >
                        {/* <MenuItem value="Garnitura"> Garnitura </MenuItem>
                        <MenuItem value="Fotelja"> Fotelja </MenuItem> */}
                        {names.map((name) => (
                          <MenuItem key={Math.random()} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>

                {/* <label> Name </label>
                <input type="text" value={enteredName} />
                <label> Desc </label>
                <input type="text" value={enteredDesc} /> */}

                {/* <FormControl fullWidth>
                  <InputLabel id="input-result-label">Tip</InputLabel>
                  <Controller
                    name="type"
                    rules={{
                      required: {
                        value: true,
                        message: "Ovo polje je obavezno.",
                      },
                    }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Tip"
                        style={{ marginBottom: 15 }}
                      >
                        {Object.keys(FurnitureType).map((res) => (
                          <MenuItem value={res} key={res}>
                            {res}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl> */}
                {/*<div*/}
                {/*    {...getRootProps()}*/}
                {/*    style={{*/}
                {/*        border: isDragActive ? "2px dashed blue" : "2px dashed black",*/}
                {/*        padding: "16px",*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <input {...getInputProps()} />*/}
                {/*    {isDragActive ? (*/}
                {/*        <p>Drop the files here ...</p>*/}
                {/*    ) : (*/}
                {/*        <p>Drag 'n' drop some files here, or click to select files</p>*/}
                {/*    )}*/}
                {/*</div>*/}
                {/*<Box*/}
                {/*    display="flex"*/}
                {/*    style={{gap: "8px"}}*/}
                {/*    // flex={1}*/}
                {/*    overflow="scroll"*/}
                {/*>*/}
                {/*    {[].map((file) => (*/}
                {/*        <Box display="flex" flexDirection="column" color="success">*/}
                {/*            <img*/}
                {/*                src={URL.createObjectURL(file)}*/}
                {/*                style={{maxHeight: "100px"}}*/}
                {/*            />*/}
                {/*            <Button>Obrisi</Button>*/}
                {/*        </Box>*/}
                {/*    ))}*/}
                {/*</Box>*/}
                {/* <button> Test test </button> */}

                {/* <Button
                  type="submit"
                  // color="success"
                  variant="outlined"
                  form="user-form"
                  sx={{
                    color: "rgb(33,122,212)",
                    backgroundColor: "transparent",
                  }}
                >
                  Dodaj model
                </Button> */}

                {!editingItem && (
                  <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    form="user-form"
                  >
                    Dodaj model
                  </Button>
                )}

                {editingItem && (
                  <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    form="user-form"
                  >
                    Izmeni model
                  </Button>
                )}
              </form>
            </FormProvider>
          </Box>
        </Box>
      </Drawer>
    </Container>
  );
};

export default ProductDashboardPage;
