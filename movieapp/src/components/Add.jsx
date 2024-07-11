import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';



const Add = () => { 
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required-Movie Name"
        // name="fname"
        // value={form.fname}
        // onChange={valueCap}
      />
      <br></br>
      <TextField
        required
        id="outlined-required"
        label="Required-Category"
        // name="category"
        // value={form.category}
        // onChange={valueCap}
      />
      <br></br>
      <TextField
        required
        id="outlined-required"
        label="Required-Director"
        // name="director"
        // value={form.director}
        // onChange={valueCap}
      />
      <br></br>
      <TextField
        required
        id="outlined-required"
        label="Required-Release Year"
        // name="releaseyear"
        // value={form.releaseyear}
        // onChange={valueCap}
      />
      <br></br>
      <TextField
        required
        id="outlined-required"
        label="Required-Poster"
        // name="image"
        // value={form.image}
        // onChange={valueCap}
      />
      <br></br>
      <Button variant="contained" color="success">Submit
        </Button>
      </div>
      </Box>
  )
}

export default Add