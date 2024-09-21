import React, { useState } from 'react'
import { Button, Typography, Box } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} minHeight="100vh" bgcolor="#f5f5f5">
        <Typography variant='h4' gutterBottom>
            Counter : {count}
        </Typography>

        <Box>
            <Button variant='contained' color='secondary' onClick={decrement} startIcon={<Remove/>} sx={{marginRight : 2}}>Decrement</Button>
            <Button variant='contained' color='primary' onClick={increment} startIcon={<Add />}>Increment</Button>

        </Box>

    </Box>
  )
}

export default Counter;