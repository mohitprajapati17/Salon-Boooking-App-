import React from 'react'
import { Card, Divider } from '@mui/material'
function Payment() {
  return (
    <div>
        <div>
            <Card className="rounded-md  space-y-4 p-5">
                <h1>
                    Total Earnings
                </h1>
                <p>
                    $1000
                </p>
                <Divider/>
                    <p> Last Payment : <strong>$1000</strong></p>
                
            </Card>
        </div>
    </div>
  )
}

export default Payment