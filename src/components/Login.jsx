import * as React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import useLogin from "../hooks/useLogin";

//ESTA LA BARRA DE BUSQUEDA

const Login = () => {
  const params = useLogin();
  const {
    handleSubmit,
    isLoading,
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
  } = params;
  return (
    <Flex height="50vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="#718096" p={12} rounded={6}>
        <Heading mb={6} ml={10}>
          Login In
        </Heading>
        <FormControl>
          <FormLabel>Email address:</FormLabel>
          <Input
            id="email"
            varian="filled"
            mb={3}
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <FormLabel>Password: </FormLabel>
          <Input
            variant="filled"
            mb={6}
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </FormControl>
        <Button
          isLoading={isLoading}
          loadingText="Loging"
          colorScheme="yellow"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};
export default Login;
