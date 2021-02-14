import { ChakraProvider, ColorModeProvider, Center } from "@chakra-ui/react";
import Theme from "../styles/theme";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={Theme}>
      <ColorModeProvider
        options={{
          initialColorMode: "dark",
          useSystemColorMode: false,
        }}
      >
        <Center h="100vh">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                opacity: 0,
                y: 50,
              },
              animate: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ type: "spring", bounce: 0 }}
            key={router.route}
          >
            <Component {...pageProps} />
          </motion.div>
        </Center>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
