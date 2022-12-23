import * as React from "react";
import {styled} from "@mui/material/styles";
import {Box, Button, Container, Grid, Paper} from "@mui/material";
import CategoryCard from "../components/CategoryCard";
import {firestore, storage} from "../firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import {ref, uploadBytes} from "firebase/storage";
import garniture from "../assets/garniture.jpeg";
import {useFirestoreCollection} from "../hooks/firestore/useFirestoreCollection";
import {kebabCase} from "lodash/fp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductsPage = () => {
  const products = useFirestoreCollection<{name: string, id: string}>('products');
  return (
    <div>
      <Box mt={8} py={8}>
        <Container maxWidth="xl">
      <Button onClick={uploadImages}>Upload images</Button>
          <Grid container spacing={2}>
            {products?.data.map((c, index) => (
              <Grid item xs={12} key={index} md={4}>
                <CategoryCard title={c.name} img={garniture} href={c.id} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

const uploadImages = async ()=>{
  const products = await getDocs(collection(firestore, 'products'));
  await Promise.all(products.docs.map(d=>d.data()).filter(d=>d.category==='Ea70yRrcWrvaMAiT3mNR').map(d=>{
    try {
    const data = require(`../assets/imgs/${kebabCase(d.name)}.jpg`);
      console.log(data);
    return uploadBytes(ref(storage, `products/${d.category}/${kebabCase(d.name)}/default-${kebabCase(d.name)}.jpg`), data)

    }catch (e) {
      return Promise.resolve(null);
    }
  }))
}

const getKat = (kat: string) => {
  if(kat === '1'){
    return 'Ea70yRrcWrvaMAiT3mNR'
  } else if (kat === '2'){
    return  'xFmlh0gjwJiqWz1Lckwi'
  } else {
    return  'GFo2UCg5hBBS7N7IHfE2'
  }
}

export default ProductsPage;
