import React, { useState } from 'react';
import { Box,Input,Button } from '@chakra-ui/react';

const CheckoutForm = () => {
  // Define state for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to server or perform validation
    console.log('Form submitted:', { firstName, lastName, email, address, city, zipCode, country });
    // Optionally, you can reset form fields here
  };

  return (
    <Box w='30%'  mt='50px' ml='auto' mr='auto' p='20px' border='1px solid grey'> 
    <form onSubmit={handleSubmit} >
      <Box mt='10px'>
        <label htmlFor="firstName" >First Name:</label>
        <Input type="text"  size='sm' mb='20px' mt='10px' id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </Box>
      <Box>
        <label htmlFor="lastName">Last Name:</label>
        <Input type="text" size='sm' mb='20px' mt='10px' id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </Box>
      <Box>
        <label htmlFor="address">Address:</label>
        <Input type="text" size='sm' mb='20px' mt='10px' id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </Box>
      <Box>
        <label htmlFor="city">City:</label>
        <Input type="text" size='sm' mb='20px' mt='10px' id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
      </Box>
      <Box>
        <label htmlFor="zipCode">Zip Code:</label>
        <Input type="text" size='sm' mb='20px' mt='10px' id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
      </Box>
      <Box>
        <label htmlFor="country">Country:</label>
        <Input type="text" size='sm' mb='20px' mt='10px' id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
      </Box>
      <Box display='flex' justifyContent='center' mb={5}>
      <Button colorScheme='green' size='sm' type="submit">Submit</Button>
      </Box>
    </form>
    </Box>
  );
};

export default CheckoutForm;
