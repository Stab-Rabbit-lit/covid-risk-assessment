import React, {useState} from 'react';
import axios from 'axios';
import {
  FormControl,
  InputLeftAddon,
  Input,
  InputGroup,
  Stack,
  Icon,
  Button,
  Container,
  Center,
  Text,

} from '@chakra-ui/react';
import {Redirect} from 'react-router';

const Signup = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [password, setPassword] = useState('');
  const [positive, setTest] = useState('');

  const getFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const getLastName = (e) => {
    setLastName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const getAddress = (e) => {
    setAddress(e.target.value);
  };

  const getZipcode = (e) => {
    setZipcode(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getTest = (e) => {
    setTest(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const signupForm = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      zipcode: zipcode,
      password: password,
      positive: positive,
    };
    console.log(signupForm);
    props.submitInfo(signupForm);
  };

  return (
    <Container maxW="300px" maxH="max" mt="50px" color="black">
      <Center pt="40px" pb="40px" pl="55px" bg="orange" borderRadius="12px">
        <form onSubmit={onSubmit} action="submit">
          <Text ml="50px" fontSize="20px">
            Sign Up
          </Text>
          <FormControl>
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<Icon name="info" />} />
              <Input
                type="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={getFirstName}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<Icon name="info" />} />
              <Input
                type="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={getLastName}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<Icon name="email" />} />
              <Input
                type="Email"
                placeholder="email"
                value={email}
                onChange={getEmail}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<Icon name="info" />} />
              <Input
                type="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={getPhoneNumber}
              />
            </InputGroup>
          </FormControl>
          <FormControl mb="15px" borderRadius="8px">
            <InputGroup>
              <InputLeftAddon children={<Icon name="info" />} />
              <Input
                type="address"
                placeholder="Address"
                value={address}
                onChange={getAddress}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<Icon name="info" />} />
              <Input
                type="zipcode"
                placeholder="Zipcode"
                value={zipcode}
                onChange={getZipcode}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>


<Text mb="8px">Did you get tested for the virus? (Positive, Negative or No test)</Text>
  <InputGroup mb="15px" borderRadius="8px">

    <InputLeftAddon children={<Icon name="info" /> } />
    <Input
      type="text"
      placeholder="Positive, Negative or No test"
      value={positive}
      onChange={getTest}
    />
  </InputGroup>

</FormControl>
          <FormControl>
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<Icon name="lock" />} />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={getPassword}
              />
            </InputGroup>
          </FormControl>

          <Button type="submit" variant="solid" ml="20px">
            Sign Up!
          </Button>
          <Button
            ml="10px"
            onClick={() => {
              window.location = '/';
            }}
          >
            Log in!
          </Button>
        </form>
      </Center>
    </Container>
  );
};

export default Signup;
