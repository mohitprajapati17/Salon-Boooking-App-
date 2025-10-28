import React from 'react'
import { Box, Button, Rating, TextField } from '@mui/material'
import {InputLabel} from '@mui/material'
import { useFormik } from 'formik'
function CreateReviewForm() {
    const formik=useFormik({
            initialValues:{
                ReviewText:"",
                ReviewRating:0
            },
            onSubmit:(values)=>{
                console.log(values)
            }
        })
  return (


    
    <Box
    Component="form"
    onSubmit={formik.handleSubmit}
    noValidate
    sx={{mt:3}}
    className="space-y-5 w-full lg:w-1/2 "
    >
        <TextField
        fullWidth
        name="ReviewText"
        id="ReviewText"
        label="Review"
        variant="outlined"
        multiline
        rows={4}
        onChange={formik.handleChange}
        value={formik.values.ReviewText}


        
        
        />
        <div className ="spce-y-2">
            <InputLabel>
            Rating
                
            </InputLabel>
            <Rating
            id="Reviewrating"
            name="Reviewrating"
            precision={0.5}
            onChange={(event , newValues)=>formik.setFieldValue("ReviewRating",newValues)}
            value={formik.values.ReviewRating}
            />

        </div>
        <Button
        variant="contained" color="primary" type ="submit"
        >
            Submit  
        </Button>


    </Box>
  )
}

export default CreateReviewForm