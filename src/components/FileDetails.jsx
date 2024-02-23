import React from "react";
import { Card, Flex, Avatar, Box, Text } from "@radix-ui/themes";
import "./filedetails.css";
function FileDetails() {
  return (
    <div className="filedetails">
      <Card size="3" style={{ width: 500 }}>
        <Flex gap="4" align="center">
          <Avatar size="5" radius="full" fallback="T" color="indigo" />
          <Box>
            <Text as="div" size="4" weight="bold">
              Title
            </Text>
            <Text as="div" size="4" color="gray">
              description :  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quo eaque natus dolorum ipsa atque, fugiat voluptatibus
            </Text>
            <Text as="div" size="4" color="gray">
              Size
            </Text>
            <Text as="div" size="4" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>
    </div>
  );
}

export default FileDetails;
