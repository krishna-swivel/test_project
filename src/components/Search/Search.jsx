import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import CommonButton from "../Button/CommonButton";
import Grid from "@mui/material/Grid";

class Search extends Component {
  state = {
    formData: {
      query: "",
    },
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSpellSearch(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
    });
  };

  render() {
    return (
      <div>
        <form ref={this.formRef}>
          <Grid container>
            <Grid sx={12} md={12}>
              <Box
                sx={{
                  width: 400,
                  maxWidth: "70%",
                }}
                style={{ marginLeft: 10, marginTop: 10 }}
              >
                <Stack spacing={3} direction="row">
                  <TextField
                    name="query"
                    type="text"
                    fullWidth
                    label="Search here"
                    value={this.state.formData.query}
                    onChange={this.handleChange}
                  />

                  <CommonButton
                    info="Search"
                    type="submit"
                    onClick={this.handleSubmit}
                  />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default Search;
