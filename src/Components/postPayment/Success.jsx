import { Box, Typography } from "@mui/material"

const Success = ()=>{

    return(
<Box
        sx={{
            width: '100%',
            height: '30vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center' ,
            bgcolor: 'primary.main'
          }}>
            <Typography variant="h1" color="text.orimary">Payment successfull</Typography>
        </Box>
    )
}

export default Success