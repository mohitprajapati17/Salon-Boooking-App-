import React, { useState } from 'react'
import { 
    CircularProgress, 
    IconButton, 
    Grid, 
    Button, 
    TextField, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem 
} from '@mui/material'
import { AddPhotoAlternate, Close } from '@mui/icons-material'
import { useFormik } from 'formik'

function CreateServiceForm() {

    const formik =useFormik({
        initialValues:{
            name:"",
            image:"",
            description:"",
            
            price:"",
            duration:"",
            category:"",
            
        },
        onSubmit:()=>{
            console.log("Submitiing " , formik.values)
        }
    })
  return (
    <div className='p-6'>
        <div className='mb-6'>
            <h1 className='text-2xl font-bold text-gray-800'>Add Services</h1>
            <p className='text-gray-600'>Create a new service for your salon</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-6 p-6 w-full max-w-4xl bg-white rounded-lg shadow-sm border">
        <Grid container spacing={2}>
            <Grid className='w-24 h-24' xs={12}>
                {true?<div className='relative-border'>
                    <img className='w-24 h-24 object-cover'
                     src="https://www.istockphoto.com/photo/man-getting-his-beard-trimmed-with-electric-razor-gm872361244-243669065?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner-popular_media&utm_term=beard"
                    alt=""
                    />

                    <IconButton
                      className=''
                      color='error'
                      size='small'
                      sx={{position:'absolute',top:0,right:0}}
                    >
                        <Close sx={{fontSize:'1rem'}}/>

                    </IconButton>


                </div>:
                <>
                <input 
                type="file" placeholder='Category Name' 
                accept="image/*"
                id="fileInput"
                style={{display:'none'}}
                
                />
                <label className='relative' htmlFor='fileInput'>
                    <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3  border  rounded-md border-gray-400'>
                        <AddPhotoAlternate className='text-gray-700'/>
                    </span>
                    {false&&(
                        <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24  flex justify-center items-center">
                            <CircularProgress/>
                        </div>
                    )}

                </label>
                </>
                }
                

            </Grid>
            <Grid xs={12}>
                <TextField fullWidth id="description" label="description"  name="description"  required value={formik.values.description} onChange={formik.handleChange}/>

            </Grid >
            <Grid xs={12} sm={6}>
            <TextField fullWidth id="price" label="price"  name="price"  required value={formik.values.price} onChange={formik.handleChange}/>
            </Grid>
            <Grid xs={12} sm={6}>
            <TextField fullWidth id="duration" label="duration"  name="duration"  required value={formik.values.duration} onChange={formik.handleChange}/>
            </Grid>
            <Grid xs={12} sm={6}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="category"
                    value={formik.values.category}
                    label="category"
                    name="category"
                    onChange={formik.handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    {[1,1,1,1,1,1].map((item, index)=><MenuItem key={index} value={"haircut"}>Haircut</MenuItem>)}
                    
                </Select>
                </FormControl>
            </Grid>
        </Grid>
        
        <div className="flex justify-end mt-6">
            <Button type="submit" variant="contained" color="primary" sx={{ 
                backgroundColor: '#10b981', 
                '&:hover': { backgroundColor: '#059669' },
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold'
            }}>
                Create Service
            </Button>
        </div>

        </form>
    </div>
  )
}

export default CreateServiceForm