import Checkout from "./Checkout";
import {Stack} from '@mui/material'
import Voucher from "./Voucher";
import { Container } from "@mui/system";

function AuxWrapper({cart}) {
    return (
        <Container>
            <Stack style={{position: 'fixed'}}>
                <Checkout/>
                {/* <Voucher/> */}
            </Stack>
        </Container>
    );
}

export default AuxWrapper;