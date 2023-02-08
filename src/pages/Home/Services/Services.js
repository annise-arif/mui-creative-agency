import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Service from "../../../components/Service/Service";

const servicesImages = [
  "https://i.ibb.co/HNhykGp/iphone-1.png",
  "https://i.ibb.co/r0gHkvM/color-palette-1.png",
  "https://i.ibb.co/CvQwzKC/coding-1.png",
];
const Services = () => {
  return (
    <Box>
      <SectionTitle title="Provide awesome" colored="Services" />
      <Grid container spacing={4}>
        {servicesImages.map((image, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Service key={i} image={servicesImages[0]} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
