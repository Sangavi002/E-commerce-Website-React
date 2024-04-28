import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Box,Flex,Input,Heading,Button} from '@chakra-ui/react';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });
          const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/product');
            } else {
                
                console.error(data.error);
            }
        } catch (error) {
          console.error('Error:', error);
        }
    }

    return(
        <>
        <Box>
            <Flex justifyContent='center'>
            <form onSubmit={handleSubmit}>
                <Heading mt={10} mb={5} textAlign='center'>Login</Heading>
                <Box border='1px solid grey' display='flex' flexDirection='column' alignItems='center' p={25} borderRadius='25px'>
                    <Heading size='sm' mt={10} mb={5}>Username</Heading>
                    <Input type="text" 
                        size='md'
                        variant='filled'
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <Heading  size='sm' mt={5} mb={5}>Password</Heading>
                    <Input type="text"
                        size='md'
                        variant='filled'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <br />
                    <Button type="submit"
                            colorScheme='teal' size='lg'
                            >Login</Button>
                </Box>
            </form>
            </Flex>
        </Box>
        </>
    )
}

export default Login