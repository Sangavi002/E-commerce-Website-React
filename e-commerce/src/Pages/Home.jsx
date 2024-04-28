import {Box,Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
        <Box  textAlign='center' mt='150px'>
            <Heading size='4xl' color='#BC7FCD'>Welcome to Amazon</Heading>
        </Box>
        <Box bg='teal' w='25%' textAlign='center' display='flex' justifyContent='center' mt='50px' ml='auto' mr='auto' p='5px 10px'color='white' >
           <Link to='./product'>
                Go to Product page
           </Link> 
        </Box>
        </>
    )
}

export default Home;