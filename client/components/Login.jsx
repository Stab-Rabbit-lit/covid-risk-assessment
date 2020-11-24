import React, {useState} from 'react';
import axios from 'axios';
import {
  Button,
  Input,
  Stack,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Icon,
  Container,
} from '@chakra-ui/react';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const loginForm = {
      email: email,
      password: password,
    };
    console.log('should be email:', loginForm.email);
    console.log('should be password:', loginForm.password);
    props.submitEmail(loginForm.email);
    props.submitPassword(loginForm.password);
    axios.post('/login', loginForm).then((res) => {
      console.log(res.data);
      if (res.data===true) window.location = '/home'})
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const signupForm = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     phoneNumber: phoneNumber,
  //     address: address,
  //     zipcode: zipcode,
  //     password: password,
  //   };
  //   console.log(signupForm);
  //   props.submitInfo(signupForm);
  //   axios.post('', signupForm).then((res) => {
  //     window.location = '/login';
  //   });
  // };

  return (
    <form onSubmit={onSubmit} action='submit' >
      <Container centerContent>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<Icon name="email" />} />
            <Input
              type="Email"
              placeholder="email"
              value={email}
              onChange={getEmail} />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
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
        <button type="submit"> Log In!</button>
      </Container>
    </form>
  );
};

export default Login;
