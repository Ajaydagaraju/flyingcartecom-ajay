import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';




const Inputfiels = () => {
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  const handleChangetype = (event) => {
    setType(event.target.value);
  };
  const handleChangecategory = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <div className="p-3 bg-light ">
      <FormControl variant="standard" style={{width:"100%"}}>
        <p className=' mb-1'>POST TYPE</p>
        <InputLabel id="demo-simple-select-standard-label" className='mt-3'>Select Post Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={type}
          onChange={handleChangetype}
          label="type"
          
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>A</MenuItem>
          <MenuItem value={2}>B</MenuItem>
          <MenuItem value={3}>C</MenuItem>
        </Select>
      </FormControl>
      </div>
      
      <div className=" mt-2 p-3 bg-light ">
        
      <FormControl variant="standard"  style={{width:"100%"}} >
        <p className=' mb-1' >CATEGORY</p>
        <InputLabel id="demo-simple-select-standard-label" className='mt-3'>Select</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChangecategory}
          label="category"
          
        >
          <MenuItem value="1">
            <em>None</em>
          </MenuItem>
          <MenuItem value={4} >A</MenuItem>
          <MenuItem value={5} >B</MenuItem>
          <MenuItem value={6} >C</MenuItem>
        </Select>
      </FormControl>
      </div>

      <div className="mt-2 mb-4 p-3 bg-light" >  
      <p className=' mb-1'>POST TAGS</p>
      <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          style={{width:'100%'}}
        />
      </div>
    
    </>
  );
};

export default Inputfiels
