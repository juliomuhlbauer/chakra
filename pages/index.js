import Head from "next/head";
import NextLink from "next/link";
import {
  Box,
  Center,
  Heading,
  Link,
  Text,
  VStack,
  Button,
  SlideFade,
  useDisclosure,
  forwardRef,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <VStack>
        <Heading
          as="h1"
          bgGradient="linear(to-r, gradient.100,gradient.200)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          JW
        </Heading>
        <NextLink href="/chakra/chakra">
          <Button colorScheme="gradient">Chakra UI</Button>
        </NextLink>
      </VStack>
    </>
  );
}
