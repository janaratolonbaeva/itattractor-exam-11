import React, {useState} from 'react';
import {Grid, MenuItem, TextField, Button} from "@material-ui/core";
import FileInput from "../UI/Form/FileInput";
import FormElement from "../UI/Form/FormElement";

const GoodsForm = ({onSubmit, categories}) => {
  const [state, setState] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
  });

  const submitFormHandler = e => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });

    onSubmit(formData);
  };

  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const fileChangeHandler = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    setState(prevState => ({
      ...prevState,
      [name]: file
    }));
  };

  return (
      <Grid container direction="column" spacing={2} component="form" onSubmit={submitFormHandler}>
        <Grid item xs>
          <FormElement
            required
            fullWidth
            variant="outlined"
            id="title"
            label="Title"
            name="title"
            value={state.title}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            id="description"
            label="Description"
            name="description"
            value={state.description}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <FileInput
            name="image"
            label="Image"
            onChange={fileChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            fullWidth
            select
            variant="outlined"
            label="Categories"
            name="category"
            value={state.category}
            onChange={inputChangeHandler}
          >
            <MenuItem><i>Select a category</i></MenuItem>
            {categories.map(category => (
              <MenuItem
                key={category._id}
                value={category._id}
              >
                {category.title}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </Grid>
      </Grid>
  );
};

export default GoodsForm;