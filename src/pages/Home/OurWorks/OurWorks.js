import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreativeCard from "../../../components/CreativeCard/CreativeCard";
import { cardData } from "./CardData";

const OurWorks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ my: 5, mb: 10 }}>
      {/* HEADING SECTION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <SectionTitle
          title={`Here are some of`}
          colored={"our works"}
          sx={{
            textAlign: "left",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },

              "& .Mui-selected": {
                color: "primary.green",
                fontWeight: "bold",
              },
              "& .MuiButtonBase-root": {
                textTransform: "capitalize",
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Web Design" />
            <Tab label="Mobile App" />
          </Tabs>
          <Box>
            <IconButton
              sx={{
                border: `1px solid #959EAD`,
                mr: 2,
              }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              sx={{
                border: `1px solid #959AED`,
              }}
              onClick={() => setValue(value + 1)}
              disabled={value === 2}
            >
              <ArrowBackIcon
                sx={{
                  transform: "rotate(180deg)",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {/* card section */}
      <Grid container spacing={4} justifyContent="center" sx={{ pt: "20px" }}>
        {cardData[value].map((image, i) => (
          <Grid key={i} item>
            <CreativeCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurWorks;
