import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React from 'react'

const TextFeild2 = () => {
  return (
   <>
                   <FormControl
                  sx={{
                    width: "100%",
                  

                    input: { color: "#fff", direction: "rtl", pr: 2 },
                    label: { color: "#fff" },
                    "& label.Mui-focused": {
                      color: "#fff",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#fff",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#fff",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#fff",
                       },
                      "&.Mui-focused fieldset": {
                        borderColor: "#fff",
                      },
                    },
                  }}
                >
            
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    endAdornment={
                      <InputAdornment
                        sx={{
                          "& .MuiTypography-root": {
                            color: "#fff",
                          },
                        }}
                        position="start"
                      >
                        <Button  sx={{fontSize:"15px",fontWeight:"bold",ml:2,color:'#111',borderRadius:"9px",border:"1px solid #FFC436" ,backgroundColor:"#FFC436",'&:hover':{backgroundColor:"rgba(204, 163, 69,0.7)"}}}>ادامه</Button>
                      </InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl>
   </>
  )
}

export default TextFeild2