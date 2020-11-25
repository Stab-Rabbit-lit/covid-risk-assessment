import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
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
  Center,
  Divider,
  Text,
} from '@chakra-ui/react';
import {Redirect} from 'react-router';

const Login = (props) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getEmail = (e) => {
    console.log('on Change email:', e.target.value);
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


    props.submitEmail(loginForm.email);
    props.submitPassword(loginForm.password);

    axios.post('/login', loginForm).then((res) => {
      console.log(res.data);
      if (res.data === true) history.push('/home');
    });
  };

  const routeChange = () => {
    // window.location = '/signup';
    history.push('/signup')
  };
  return (
    <Container maxW="300px" maxH="max" mt="50px" color="black">
      <Center pt="40px" pb="40px" bg="silver" borderRadius="12px">
        <form onSubmit={onSubmit} action="submit">
          <Text ml="70px">Enter Login Credentials!</Text>
          <FormControl isRequired>
            <InputGroup mb="15px" borderRadius="8px" pl="75px">
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
            <InputGroup borderRadius="8px" pl="75px">
              <InputLeftAddon children={<Icon name="lock" />} />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={getPassword}
              />
            </InputGroup>
          </FormControl>
          <Divider orientation="horizontal" width="250px" />
          <Button bg="red" type="submit" ml="100px" mt="10px">
            Log In!
          </Button>
          <Button bg="grey" ml="100px" mt="10px" onClick={routeChange}>
            Sign Up
          </Button>
        </form>
      </Center>
    </Container>
  );
};

export default Login;
