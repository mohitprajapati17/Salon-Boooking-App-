import React from 'react'
import { Box, Rating, TextField } from '@mui/material'
import {InputLabel} from '@mui/material'
function CreateReviewForm() {
  return (
    <Box
    Component="form"
    // onSubmit={handleSubmit}
    noValidate
    sx={{mt:3}}
    className="space-y-5 w-full lg:w-1/2 flex flex-col items-center p-45"
    >
        <TextField
        fullWidth
        name="ReviewText"
        id="reviewtext"
        label="Review"
        variant="outlined"
        multiline
        rows={4}

        
        
        />
        <div className ="spce-y-2">
            <InputLabel>
            Rating
                
            </InputLabel>
            <Rating
            id="Reviewrating"
            name="Reviewrating"
            value={3}
            precision={0.5}
            
            />

        </div>

    </Box>
  )
}

export default CreateReviewForm