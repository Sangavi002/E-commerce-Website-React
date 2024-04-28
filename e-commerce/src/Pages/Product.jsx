import { useContext } from 'react';
import { AppContent } from '../Content/AppContent';
import {Grid,Box,Heading,Image,Center,Button} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

const Product = () => {
  const { products, loading, error } = useContext(AppContent);
  const navigate = useNavigate();

  const updateCart = async (value) => {
        console.log('product data', value);
        try {
        const response = await fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value),
        });
        const data = await response.json();
            if (response.ok) {
                navigate('/cart');
                console.log(value)
            } else {
                
                console.error(data.error);
            }
        } catch (error) {
        console.error('Error:', error);
        }
    }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={30} p='80px'>
        {products.map((ele) => (
            <>
                <Box border='1px solid'w='90%' boxShadow='xs' rounded='md' bg='white'>
                    <Link key={ele.id} to={`/product/${ele.id}`} className='card-link'>
                        <Box height='230px' p={5}>
                            <Center>
                                <Image src={ele.image} alt={ele.category}height='200px'/>
                            </Center>
                        </Box>
                        <Box p='15px'>
                            <Heading size='sm'textAlign='center' color='#8B322C' height='42px' overflow='hidden' textOverflow='ellipsis'>{ele.title}</Heading>
                            <Heading size='sm'textAlign='center'mt={3} color='rgb(221, 87, 70)'>₹ {ele.price}</Heading>
                        </Box>
                    </Link>
                    <Box display='flex' justifyContent='center' mb={5}>
                        <Button colorScheme='green' size='sm' onClick={() => updateCart(ele)}>Add to Cart</Button>
                    </Box>
                </Box>
            </>
        ))}
      </Grid>
    </>
  );
};

export default Product;