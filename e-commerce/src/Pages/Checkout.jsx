import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {Box,Heading,Image,Center,Button} from '@chakra-ui/react';

const Checkout = () => {
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
        console.log('Form submitted:', { firstName, lastName, email, address, city, zipCode, country });
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="zipCode">Zip Code:</label>
                <input type="text" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Checkout;