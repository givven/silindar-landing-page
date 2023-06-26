import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Dropdown.css'

import { deepPurple } from '@material-ui/core/colors/';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {

//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
    classes: {
        list: {
            "& li:hover":{
            background: deepPurple[100]

            },
            "& li.Mui-selected":{
            color:'yellow',
            background: deepPurple[400]
            },
            "& li.Mui-selected:hover":{
            background: deepPurple[500]
            }
        },
        paper: {
            borderRadius: 12,
            marginTop: 8
        },
    }
};

// const names = [
//   '기획',
//   '디자인',
//   '개발',
//   '마케팅',
//   '예비창업가',
// ];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({data_list, class_name, title_name , personName, handleChange}) {
  const theme = useTheme();

  return (
    <div className={class_name}>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label">{title_name}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          defaultValue={['job-plan']}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          inputProps={{
            MenuProps: {
                MenuListProps: {
                    sx: {
                        backgroundColor: '#222222',
                        color: 'white',
                        // ".css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected":{
                        //   backgroundColor: 'blue',
                        // },
                        "& .css-ov3z8l-MuiMenuItem-root.Mui-selected":{
                          backgroundColor: "yellow"
                        },
                        "& .MuiMenuItem-root.Mui-selected": {
                          backgroundColor: "#2A2D1C"
                        },
                        "& .MuiMenuItem-root:hover": {
                          backgroundColor: "#222222"
                        },
                        "& .MuiMenuItem-root.Mui-selected:hover": {
                          backgroundColor: "#2A2D1C"
                        },
                        "&.MuiOutlinedInput-input:hover":{
                          backgroundColor: '#2A2D1C'
                        }
                        
                    }
              
                }
            }
          }}
        > 
          {data_list.map((data) => (
            <MenuItem
              key={data.name}
              value={data.value}
              style={getStyles(data.name, personName, theme)}
              checked={true}
              background={'red'}
            >
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}