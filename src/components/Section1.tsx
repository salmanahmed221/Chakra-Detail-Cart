"use client";
import {
  Box,
  Heading,
  Text,
  Input,
  Flex,
  Checkbox,
  Button,
  Center,
} from "@chakra-ui/react";

export default function Section1() {
  return (
    <>
      {/* Starting Part */}
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
              <Heading>Your details</Heading>
              <Text mt="5px">
                If you already have an account,click here to login.
              </Text>

              {/* Input Part */}

              <Flex gap="10px" mt="40px">
                <Box>
                  <Text>First Name</Text>
                  <Input
                    borderRadius="0px"
                    bg="gray.200"
                    placeholder="John"
                    w="250px"
                  />
                </Box>
                <Box>
                  <Text>Last Name</Text>
                  <Input
                    borderRadius="0px"
                    bg="gray.200"
                    placeholder="Doe"
                    w="250px"
                  />
                </Box>
              </Flex>

              <Box mt="20px">
                <Text>Address</Text>
                <Input
                  borderRadius="0px"
                  bg="gray.200"
                  placeholder="Blvd,Broken Dream 21"
                  w="510px"
                />
              </Box>

              <Flex gap="10px" mt="20px">
                <Box>
                  <Text>City</Text>
                  <Input
                    borderRadius="0px"
                    bg="gray.200"
                    placeholder="San Francisco"
                    w="250px"
                  />
                </Box>
                <Box>
                  <Text>Country</Text>
                  <Input
                    borderRadius="0px"
                    bg="gray.200"
                    placeholder="United States of America"
                    w="250px"
                  />
                </Box>
              </Flex>

              <Box mt="20px">
                <Checkbox defaultChecked>Ship to the billing address</Checkbox>
              </Box>

              <Box mt="20px">
                <Button color="white" bg="#8ac919" borderRadius="0px" w="510px">
                  Place order
                </Button>
              </Box>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
}
