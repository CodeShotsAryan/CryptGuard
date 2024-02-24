import React from "react";
import { Card, Flex, Avatar, Box, Text } from "@radix-ui/themes";
import "./filedetails.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function FileDetails() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/dashboard');
  };
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
              description : <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quo eaque natus dolorum ipsa atque, fugiat voluptatibus
            </Text>
            <Text as="div" size="4" color="gray">
              Size
            </Text>
            <Text as="div" size="4" color="gray">
              Format
            </Text>
            <Link to=''><button className="gobackbtn" onClick={handleClick} >Go Back</button></Link>
          </Box>
        </Flex>
      </Card>
    </div>
  );
}

export default FileDetails;
