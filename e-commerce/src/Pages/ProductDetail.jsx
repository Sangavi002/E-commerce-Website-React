import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {Box,Heading,Image,Center,Button} from '@chakra-ui/react';

const ProductDetail = () => {
    const {userId}  = useParams();
  
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${userId}`)
        .then((response) => response.json())
        .then((productData) => setProducts(productData))
        .catch((error) => console.log(error))
    });

   
    
    return (
        <>
            <Box display='flex' w='70%' m='auto' >
                <Box p={20}>
                    <Image src={products.image} alt={products.title} height='300px' w='800px'/>
                </Box>
                <Box padding='100px 50px'>
                    <Heading size='lg' mt={5} color='#10439F'>{products.title}</Heading>
                    <Heading size='xs' color='#AF8260' fontWeight='500'>{products.description}</Heading>
                    <Heading size='sm'mt={5} color='#803D3B'>Category: {products.category}</Heading>
                    <Heading size='sm'mt={2} color='#803D3B'>Price: {products.price}</Heading>
                    <Button colorScheme='green' size='sm' mt={3} >Add to Cart</Button>
                </Box>
            </Box>
        </>
    );
}

export default ProductDetail;