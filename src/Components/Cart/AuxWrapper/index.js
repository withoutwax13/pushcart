import Checkout from "./Checkout";
import {Stack} from '@mui/material'
import Voucher from "./Voucher";
import { Container } from "@mui/system";

function AuxWrapper({cart}) {
    return (
        <Container>
            <Stack spacing={1} style={{position: 'fixed'}}>
                <Checkout cartData={(new Date()).getMilliseconds()}/>
                <Voucher/>
            </Stack>
        </Container>
    );
}

export default AuxWrapper;