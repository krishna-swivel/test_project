/**
 * Module - Spell Card
 */

import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const RenderComponent = ({ spell }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 4,
        justifyContent: "space-between",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/500/300"
          alt="screen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {spell.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          to={{
            pathname: `/spell/${spell.index}`,
          }}
          style={{ textDecoration: "none" }}
        >
          <Button size="small" color="primary" variant="contained">
            For info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SpellCard = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1 style={{ marginTop: 20 }}>{props.spell.name}</h1>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4}>
          <RenderComponent spell={props.spell} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RenderComponent spell={props.spell} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RenderComponent spell={props.spell} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpellCard;
