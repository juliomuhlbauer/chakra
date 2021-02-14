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
  Input,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SlideFade,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <VStack spacing={5}>
        <Heading
          as="h1"
          bgGradient="linear(to-r, gradient.100,gradient.200)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Chakra UI
        </Heading>
        <Input placeholder="Basic usage" />
        <Select placeholder="Select option" colorScheme="blue">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <NextLink href="/">
          <Button colorScheme="gradient">Homepage</Button>
        </NextLink>
      </VStack>
    </>
  );
}
