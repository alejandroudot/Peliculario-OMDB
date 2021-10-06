import * as React from "react";
import useRegister from "../hooks/useRegister";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

//ESTA LA BARRA DE BUSQUEDA

const Register = () => {
  const params = useRegister();
  const {
    name,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    onSingUp,
    checkValidation,
    nameValidation,
    nameError,
    error,
    disabled,
    emailError,
    isLoading,
  } = params;

  return (
    <Box>
      <Box></Box>
      <Flex height="80vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="#718096" p={12} rounded={6}>
          <Heading mb={6} ml={10} mr={10}>
            Create account
          </Heading>
          <FormControl mb={3}>
            <FormLabel>Your name:</FormLabel>
            <Input
              id="text"
              varian="filled"
              type="text"
              value={name}
              onChange={(e) => nameValidation(e.target.value)}
            />
            <FormHelperText color={"#E2E8F0"}>{nameError}</FormHelperText>
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Email:</FormLabel>
            <Input
              id="email"
              varian="filled"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText color={"#E2E8F0"}>{emailError}</FormHelperText>
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Password: </FormLabel>
            <Input
              variant="filled"
              type="password"
              placeholder="at least 8 characters"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Confirm password: </FormLabel>
            <Input
              variant="filled"
              type="password"
              onChange={(e) => checkValidation(e.target.value)}
              value={confirmPassword}
            />
            <FormHelperText color={"#E2E8F0"}>{error}</FormHelperText>
          </FormControl>
          <Button
            isLoading={isLoading}
            disabled={disabled}
            loadingText="Logging"
            colorScheme="yellow"
            onClick={(e) => onSingUp(e)}
          >
            Create your OMDb Account
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Register;
