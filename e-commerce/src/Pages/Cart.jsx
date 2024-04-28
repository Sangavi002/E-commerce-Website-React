import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Box,Heading,Image,Center,Button} from '@chakra-ui/react';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/cart`)
        .then((response) => response.json())
        .then((productData) => setProducts(productData))
        .catch((error) => console.log(error))
    });

    const navigate = useNavigate();

  const routeToCheckout = () => {
    let price = 0;
    let ps = [...products]
    ps.forEach( p => {
        price = price + p.price;
    });
    price = price.toFixed(2);
    navigate(`/checkout?price=${price}`);
  }
    
    return (
        <>
      <Box>
        {products.map((ele) => (
            <>
                <Box boxShadow='xs' rounded='md' bg='white'>
                    <Box p={5}>
                            <Center>
                                <Image src={ele.image} alt={ele.category} width='100px' height='100px'/>
                            </Center>
                        </Box>
                        <Box p='15px'>
                            <Heading size='sm'textAlign='center' color='#8B322C'>{ele.title}</Heading>
                            <Heading size='sm'textAlign='center'mt={3} color='rgb(221, 87, 70)'>₹ {ele.price}</Heading>
                    </Box>
                </Box>
            </>
        ))}
        <Box display='flex' justifyContent='center' mb={5}>
                    <Button colorScheme='green' size='sm' onClick={() => routeToCheckout()}>Proceed to checkout</Button>
        </Box>
      </Box>
    </>
    );
}

export default Cart;