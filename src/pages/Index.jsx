import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={8} align="center" justify="center" minHeight="100vh" bgImage="url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920')" bgSize="cover" bgPosition="center" color="white" textAlign="center" px={4}>
      <Heading as="h1" size="4xl">
        The Rockers Tour 2024 ❤️
      </Heading>

      <Text fontSize="2xl" fontWeight="bold">
        Get ready to rock with us on our world tour!
      </Text>

      <Button leftIcon={<FaTicketAlt />} size="lg" colorScheme="blue" as="a" href="/tour-dates">
        View Tour Dates
      </Button>
    </VStack>
  );
};

export default Index;
