import React, { useState, useEffect } from "react";
import { getSpellDetails } from "../../Api/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function SpellDetailsHook(props) {
  const [state, setState] = useState({
    spellDetails: {},
  });

  const getData = () => {
    const spellDetails = getSpellDetails(props.match.params.name);
    console.log(spellDetails);
    setState({ spellDetails: spellDetails });
    console.log(state.spellDetails);
  };
  useEffect(() => {
    getData();
  }, []);

  const { spellDetails } = state;

  return (
    <>
      {spellDetails.name ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: 10,
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://picsum.photos/500/300"
                  alt="green_iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {spellDetails.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ justifyContent: "center", textAlign: "justify" }}
                  >
                    {spellDetails.desc[0]}
                  </Typography>
                </CardContent>
                <CardActions>
                  {spellDetails.classes.length ? (
                    <>
                      {spellDetails.classes.map((playerClass) => (
                        <div key={playerClass.index}>
                          <Button size="small">{playerClass.name}</Button>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>No player classes may use this spell</p>
                  )}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: 10,
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://picsum.photos/500/300"
                  alt="green_iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {spellDetails.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ justifyContent: "center", textAlign: "justify" }}
                  >
                    {spellDetails.desc[0]}
                  </Typography>
                </CardContent>
                <CardActions>
                  {spellDetails.classes.length ? (
                    <>
                      {spellDetails.classes.map((playerClass) => (
                        <div key={playerClass.index}>
                          <Button size="small">{playerClass.name}</Button>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>No player classes may use this spell</p>
                  )}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: 10,
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://picsum.photos/500/300"
                  alt="green_iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {spellDetails.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ justifyContent: "center", textAlign: "justify" }}
                  >
                    {spellDetails.desc[0]}
                  </Typography>
                </CardContent>
                <CardActions>
                  {spellDetails.classes.length ? (
                    <>
                      {spellDetails.classes.map((playerClass) => (
                        <div key={playerClass.index}>
                          <Button size="small">{playerClass.name}</Button>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>No player classes may use this spell</p>
                  )}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <h1 style={{ color: "green" }}>Loading spell details...</h1>
        </>
      )}
    </>
  );
}

export default SpellDetailsHook;
