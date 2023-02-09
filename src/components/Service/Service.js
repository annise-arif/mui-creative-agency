import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Service = ({ image }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        pt: 2,
        my: 2,
        mx: "auto",
        "&:hover": {
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardMedia
        sx={{ width: "auto", mx: "auto" }}
        alt="green iguana"
        image={image}
        component="img"
        height="140"
      />
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
          }}
        >
          Web & Mobile design
        </Typography>
        <Typography>
          We craft stumming and amazing web UI, using a Well drrafted UX to fit
          your product.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
