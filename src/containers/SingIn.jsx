import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/layout";
import { Button, Heading, Divider, Stack, Text } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

//ESTA LA BARRA DE BUSQUEDA

const SignIn = () => {
  return (
    <Box>
      <Flex height="50vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="#718096" p={12} rounded={6}>
          <Heading mb={6} ml={10}>
            Sing In
          </Heading>
          <Link to={`/login`}>
            <Button mb={6} height="48px" width="200px" leftIcon={<EmailIcon />}>
              Sign In with OMDb
            </Button>
          </Link>
          <Stack direction="row" p={3}>
            <Divider orientation="horizontal" p={1} />
            <Text>or</Text>
            <Divider orientation="horizontal" p={1} />
          </Stack>
          <Link to={`/register`}>
            <Button mb={6} height="48px" width="200px">
              Create a New Account
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
export default SignIn;
