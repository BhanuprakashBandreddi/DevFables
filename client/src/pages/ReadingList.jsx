import { Container, Text } from '@chakra-ui/react';

const ReadingList = () => {
  return (
    <Container maxW={'1200px'} minH={'100vh'} pb='8'>
      <Text fontSize={'2xl'} fontWeight='bold'>
        Reading list
      </Text>
    </Container>
  );
};

export default ReadingList;
