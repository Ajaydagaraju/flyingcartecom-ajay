import React from 'react'
import TextField from '@mui/material/TextField';
import TextareaAutosize from "@mui/material/TextareaAutosize";


const Bodypart = () => {
  return (
    <div className='mt-2'>
        <h6 >Gernal Information</h6>
      <TextField id="standard-basic" label="Title" variant="standard" style={{ width:"100%", }} />
      <div className='mt-4 mb-4' >
        <h6>Expert</h6>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}              
          style={{ border:'none', borderBottom:'1px solid gray', outline:'none' , width:"100%" }}
          className='bg-light'
        />
      </div>
    </div>
  )
}

export default Bodypart