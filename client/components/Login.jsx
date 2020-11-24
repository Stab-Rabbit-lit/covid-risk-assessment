import React, {useState} from 'react';
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

const Login = () => {
  return (
    <form onSubmit={onSubmit} action="submit">
      <Container centerContent>
        <FormControl isRequired>
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
        <button type="submit">Login In!</button>
        <button
          onClick={() => {
            window.location('/Signup');
          }}
        >
          Sign Up!
        </button>
      </Container>
    </form>
  );
};

export default Login;
