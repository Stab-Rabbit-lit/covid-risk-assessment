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
  Container,
  Center,
  Divider,
  Text,
  InputLeftElement,
  Box,
  useToast,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ArrowForwardIcon } from '@chakra-ui/icons'
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
      if (res.data === true) {
        toast({
          title: "Logged in.",
          description: "You are now signed in!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        history.push('/home');
      } else {
        alert('Password or email is incorrect')
      }
    });
  };

  const routeChange = () => {
    // window.location = '/signup';
    history.push('/signup')
  }

  const toast = useToast();
  return (
    <Center>
        <Center maxWidth='400px' pt="40px" pb="40px" bg='#FAC95F' borderRadius="12px" p='25px' mt='50px' boxShadow='dark-lg'>
            <form onSubmit={onSubmit} action="submit">
              <Center mb='15px'>
                <Text fontSize="2xl">Enter Login Credentials!</Text>
              </Center>
              <FormControl isRequired >
                <InputGroup mb="15px" borderRadius="8px">
                  <InputLeftAddon children={<EmailIcon/>} />
                  <Input
                    type="Email"
                    placeHolder="Enter Email"
                    value={email}
                    onChange={getEmail}
                    color='black'
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup borderRadius="8px">
                  <InputLeftAddon children={<LockIcon />} />
                  <Input
                    type="password"
                    placeHolder="Enter Password"
                    value={password}
                    onChange={getPassword}
                  />
                </InputGroup>
              </FormControl>
              <Center mt='15px'>
                <HStack>
                  <Button rightIcon={<ArrowForwardIcon />} bg="lavender" type="submit" >
                    Log In
                  </Button>
                  <Button rightIcon={<ArrowForwardIcon />} bg="lavender" onClick={routeChange}>
                    Sign Up
                  </Button>
                </HStack>
              </Center>

            </form>
        </Center>
    </Center>
  )
};

export default Login;
