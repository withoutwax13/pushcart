import {Box, Stack, TextField, Button} from '@mui/material'
import { useState } from 'react';
function Voucher() {
    const [voucher, setVoucher] = useState('')
    return (
        <Box
            sx={{
                maxWidth: `${(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)/3}px`,
                width: `${(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)/3.5}px`,
                height: '90%',
                backgroundColor: 'primary.containerNotWhite',
            }}
            style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding: '10% 10%'}}>
            <Stack spacing={2}>
            <TextField fullWidth label="Input Voucher Code" id="fullWidth" style={{borderRadius: '10px', padding: '10px'}} value={voucher} onChange={e=>setVoucher(e.target.value)} />
                <Button fullWidth={true} color='secondary' variant="contained" size="large" style={{borderRadius: '50px'}}>
                    APPLY VOUCHER
                </Button>
            </Stack>
        </Box>
    );
}

export default Voucher;