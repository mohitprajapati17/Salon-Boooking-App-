import React from 'react'
import { Avatar, Grid, Box, Rating, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

function ReviewCard() {
  return (
    <div className='flex justify-center'>
        <div className='w-[80%] border '>
        <Grid container  >
            <Grid item xs={1.5}>
                <Box>
                    <Avatar className="text-white" sx={{width:56, height:56, bgcolor:"#9155FD"}}>
                        A
                    </Avatar>
                </Box>
            </Grid>
            
            <Grid item xs={9}>
            
                <div className=''>
                    
                        
                            <p className='font-semibold text-lg'>Ankit</p>
                            <p className='opacity-70'>October 17, 2025</p>
                    </div>
                        <div>
                            <Rating readOnly value={4.5} name ="half-rating" defaultValue={4.5} precision={0.5}>


                            </Rating>
                        </div>
                    
                    <p>
                        Excellent service! The staff was very professional and the haircut was exactly what I wanted. Highly recommended!
                    </p>
                 
            </Grid>  
        </Grid>
        </div>
        <IconButton><DeleteIcon/></IconButton>
    </div>
  )
}

export default ReviewCard