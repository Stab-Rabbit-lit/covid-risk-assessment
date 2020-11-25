import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
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
  useToast
} from '@chakra-ui/react';
import { ArrowRightIcon, StarIcon, WarningIcon, EmailIcon, PhoneIcon, LockIcon, TriangleDownIcon, InfoIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import {Redirect} from 'react-router';

const Signup = (props) => {
  let history = useHistory();
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
      positive: positive
    };
    //positive: positive,
    console.log('This da signup form', signupForm);
    props.submitInfo(signupForm);

    axios.post('/signup', signupForm).then((res) => {
      console.log(res.data);
      if (res.data === true) {
        toast({
          title: "Signed Up.",
          description: "You are now signed up!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        history.push('/home');
      }
    });

  };

  const toast = useToast();
  return (
    <Container mt="50px">
      <Center pt="40px" pb="40px" bg="#FAC95F" borderRadius="12px" boxShadow='dark-lg' width="470px">
        <form onSubmit={onSubmit} action="submit">
            <Center mb='10px'>
              <Text fontSize="3xl">
                Sign Up
              </Text>
            </Center>
            <FormControl isRequired >
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={< StarIcon />} />
              <Input
                type="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={getFirstName}
              />
            </InputGroup>
          </FormControl>
            <FormControl isRequired >
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<StarIcon />} />
              <Input
                type="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={getLastName}
              />
            </InputGroup>
          </FormControl>
            <FormControl isRequired >
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<EmailIcon />} />
              <Input
                type="Email"
                placeholder="email"
                value={email}
                onChange={getEmail}
              />
            </InputGroup>
          </FormControl>
            <FormControl isRequired >
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<PhoneIcon />} />
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
              <InputLeftAddon children={<InfoIcon />} />
              <Input
                type="address"
                placeholder="Address"
                value={address}
                onChange={getAddress}
              />
            </InputGroup>
          </FormControl>
            <FormControl isRequired >
            <InputGroup mb="15px" borderRadius="8px">
              <InputLeftAddon children={<InfoIcon />} />
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
              <InputLeftAddon children={<LockIcon />} />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={getPassword}
              />
            </InputGroup>
          </FormControl>

          <Button rightIcon={<ArrowForwardIcon />} type="submit" ml="8px">
            Sign Up
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            ml="10px"
            onClick={() => {
              window.location = '/';
            }}
            p='20px'
          >
            Log In
          </Button>
        </form>
      </Center>
    </Container>
  );
};

export default Signup;