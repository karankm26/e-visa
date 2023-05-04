import { Box, Typography } from "@mui/material"

const Error = ()=>{

    return(
        <Box
        sx={{
            width: '100%',
            height: '30vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center' ,
            bgcolor: 'text.secondary'
          }}>
            <Typography variant="h1" color="warning.main">Payment Unsuccessfull</Typography>
        </Box>
    )
}

export default Error