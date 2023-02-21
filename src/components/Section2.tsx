"use client";

import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";

export default function Section2() {
  return (
    <>
      <Center>
        <Box
          className="ParentBox"
          h="600px"
          w="750px"
          border="2px solid black"
          mt="50px"
        >
          <Center mt="50px">
            <Box w="640px" h="740px">
              <Heading>Your Cart</Heading>
              <Text>
                If prices is too hard on your eyes,
                <span style={{ fontWeight: "bold" }}>
                  try changing the theme
                </span>
              </Text>

              <Flex justify="space-between" mt="24px">
                <Box>
                  <Text fontWeight="bold">Penny board</Text>
                  <Text>PNYCOMP27541</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">$119.00</Text>
                </Box>
              </Flex>

              <Flex justifyContent="space-between" mt="24px">
                <Box>
                  <Text>Subtotal</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">$119.00</Text>
                </Box>
              </Flex>

              <Flex justifyContent="space-between" mt="24px">
                <Box>
                  <Text>Shipping</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">$19.99</Text>
                </Box>
              </Flex>

              <Flex justifyContent="space-between" mt="24px">
                <Box>
                  <Text>Taxes(estimated)</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">$23.80</Text>
                </Box>
              </Flex>

              <Divider mt="20px" />

              <Flex justifyContent="space-between" mt="24px">
                <Box>
                  <Text>Total</Text>
                </Box>
                <Box>
                  <Text fontSize="25px" fontWeight="bold">
                    $162.79
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
}
