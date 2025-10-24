import React, { useState } from 'react'
import { 
    CircularProgress, 
    IconButton, 
    Grid, 
    Button, 
    TextField 
} from '@mui/material'
import { AddPhotoAlternate, Close } from '@mui/icons-material'
import { useFormik } from 'formik'

function CategoryForm() {

    const formik =useFormik({
        initialValues:{
            name:"",
            image:"",
            
            
        },
        onSubmit:()=>{
            console.log("Submitiing " , formik.values)
        }
    })
  return (
    <div className='p-6'>
        <div className='mb-6'>
            <h1 className='text-2xl font-bold text-gray-800'>Add Category</h1>
            <p className='text-gray-600'>Create a new category for your services</p>
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
                <TextField fullWidth id="name" label="name"  name="name"  required value={formik.values.name} onChange={formik.handleChange}/>

            </Grid>
            <Grid xs={12}>
                <Button variant='contained' fullWidth type='submit' sx={{
                    backgroundColor: '#10b981', 
                    '&:hover': { backgroundColor: '#059669' },
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 'bold'
                }}>Create Category</Button>
            </Grid>

        </Grid>

        </form>
    </div>
  )
}

export default CategoryForm