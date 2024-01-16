import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";


function SelectEnqType(props) {

  return (
    <FormControl sx={{width: '100%'}}>
      <InputLabel sx={{color: props.helperText ? 'red' : 'black'}}>{props.label}</InputLabel>
      <Select
        name='enqType'
        id='enqType'
        variant='outlined'
        value={props.value}
        label={props.label}
        onChange={props.onChange} 
        sx={{color: props.helperText ? 'red' : 'black'}}
      >
        <MenuItem value={'Seller Inquiry'}>Seller Inquiry</MenuItem>
        <MenuItem value={'Buyer Inquiry'}>Buyer Inquiry</MenuItem>
        <MenuItem value={'Customer Care Concern'}>Customer Care Concern</MenuItem>
        <MenuItem value={'Other Concerns'}>Other Concerns</MenuItem>
      </Select>
      {props.helperText ?
        <Typography variant='caption'>
          {props.helperText}
        </Typography> : null
      }
    </FormControl>
  )
}


export default SelectEnqType;