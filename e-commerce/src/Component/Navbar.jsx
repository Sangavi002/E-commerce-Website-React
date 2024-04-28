import {Link} from 'react-router-dom';
import {Box,Flex} from '@chakra-ui/react';

function Navbar() {
    return(
        <>
        <Box bg='black' color='white' p={3} size='sm'>
            <Flex justifyContent ='space-around'>
            <Link to='/'>Home</Link>
            <Link to='/Product'>Product</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/login'>Login</Link>
            </Flex>
        </Box>
        </>
    )
}
export default Navbar;