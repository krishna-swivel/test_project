import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
            style={{ marginLeft: 50 }}
          >
            <Stack spacing={3} direction="row">
              <TextField
                name="query"
                type="text"
                fullWidth
                label="Search here"
                id="fullWidth"
                value={this.state.formData.query}
                onChange={this.handleChange}
              />

              <Button variant="contained" type="submit">
                Search
              </Button>
            </Stack>
          </Box>
        </form>
      </div>
    );
  }
}

export default Search;
