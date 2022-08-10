import React from "react";
import { Avatar, Box } from "../Notification/styles";
import { Container, Cab } from "./styles";

export const User = () => {
  return (
    <Container>
      <Avatar />
      <Box>
        <Cab>
          <span>@tx</span>
        </Cab>
      </Box>
    </Container>
  );
};

export const UserTwo = () => {
  return (
    <Container>
      <Avatar />
      <Box>
        <Cab>
          <span>@user124</span>
        </Cab>
      </Box>
    </Container>
  );
};
