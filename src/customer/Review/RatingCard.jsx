import React from 'react'
import { Box, Grid, LinearProgress, Rating } from '@mui/material'
import { green } from '@mui/material/colors'

function RatingCard() {
  return (
    <div className='border p-5 rounded-md'>
        <div className ="flex items-center space-x-3 pb-10">

        <Rating
         readOnly
         value={4.5}
         precision={0.5}
         name="half-rating"
         defaultValue={4.5}
        
        />

        <p className='opacity-60'>45678</p>

        <Box>
            <Grid container justifyContent="center" alignItems="center">
                <Grid size={2}>
                    <p>Excellent</p>


                </Grid>
                <Grid size={2}>
                    <LinearProgress sx={{bg:"#d0d0d0"}} variant="determinate" color ="success" value={50} />


                </Grid>

                <Grid size={2}>
                    <p className ='opacity-60 p-2'>1231</p>

                </Grid>

            </Grid>




            <Grid container justifyContent="center" alignItems="center">
                <Grid size={2}>
                    <p>very good</p>


                </Grid>
                <Grid size={2}>
                    <LinearProgress sx={{bg:"#d0d0d0"}} variant="determinate" color ="success" value={40} />


                </Grid>

                <Grid size={2}>
                    <p className ='opacity-60 p-2'>1231</p>

                </Grid>

            </Grid>





            <Grid container justifyContent="center" alignItems="center">
                <Grid size={2}>
                    <p>good</p>


                </Grid>
                <Grid size={2}>
                    <LinearProgress sx={{bg:"#d0d0d0"}} variant="determinate" color ="success" value={20} />


                </Grid>

                <Grid size={2}>
                    <p className ='opacity-60 p-2'>1231</p>

                </Grid>

            </Grid>




            <Grid container justifyContent="center" alignItems="center">
                <Grid size={2}>
                    <p>average</p>


                </Grid>
                <Grid size={2}>
                    <LinearProgress sx={{bg:"#d0d0d0"}} variant="determinate" color ="success" value={10} />


                </Grid>

                <Grid size={2}>
                    <p className ='opacity-60 p-2'>1231</p>

                </Grid>

            </Grid>





            <Grid container justifyContent="center" alignItems="center">
                <Grid size={2}>
                    <p>poor</p>


                </Grid>
                <Grid size={2}>
                    <LinearProgress sx={{bg:"#d0d0d0"}} variant="determinate" color ="success" value={5} />


                </Grid>

                <Grid size={2}>
                    <p className ='opacity-60 p-2'>1231</p>

                </Grid>

            </Grid>

        </Box>
        
        </div>

    </div>
  )
}

export default RatingCard