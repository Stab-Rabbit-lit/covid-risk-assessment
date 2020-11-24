import React, {useState} from 'react';
import axios from 'axios';
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Icon,
  Button,
  Container,
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
    };
    console.log(signupForm);
    props.submitInfo(signupForm);
    // axios.post('', signupForm).then((res) => {
    //   window.location = '/login';
    // });
  };

  return (
    <form onSubmit={onSubmit} action="submit">
      <Container centerContent>
        <FormControl>
          <InputGroup>
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
          <InputGroup>
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
          <InputGroup>
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
          <InputGroup>
            <InputLeftAddon children={<Icon name="info" />} />
            <Input
              type="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={getPhoneNumber}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
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
          <InputGroup>
            <InputLeftAddon children={<Icon name="info" />} />
            <Input
              type="zipcode"
              placeholder="Zipcode"
              value={zipcode}
              onChange={getZipcode}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftAddon children={<Icon name="lock" />} />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={getPassword}
            />
          </InputGroup>
        </FormControl>

        <Button type="submit" variant="solid">
          Sign Up!
        </Button>
        <button
          onClick={() => {
            window.location('/Login');
          }}
        >
          Log in!
        </button>
      </Container>
      <button
        onClick={() => {
          window.location('/Login');
        }}
      >
        Log in!
      </button>
    </form>
  );
};

export default Signup;
