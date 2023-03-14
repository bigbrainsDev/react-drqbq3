import React from 'react';
import './style.css';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
import { Text, Box } from '@chakra-ui/react';
import changeTheme from './changeTheme';

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

export default function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <div>
        <Box
          w="100%"
          h="200px"
          bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        />
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome to Chakra UI
        </Text>

        <Box
          as="button"
          p={4}
          color="white"
          fontWeight="bold"
          borderRadius="md"
          bgGradient="linear(to-r, teal.500, green.500)"
          _hover={{
            bgGradient: 'linear(to-r, red.500, yellow.500)',
          }}
        >
          Click here
        </Box>

        <Button size="sm" colorScheme="blue" onClick={changeTheme}>
          Toggle Mode
        </Button>
      </div>
    </ChakraBaseProvider>
  );
}
