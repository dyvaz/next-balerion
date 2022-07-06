import React from "react";
import LayoutLogin from "../../components/LayoutLogin";

import { Title, Input, Button, A } from "../Login/styles";

const NewAccount = () => {
  return (
    <LayoutLogin>
      <Title>Create yout account</Title>
      <Input type="text" placeholder="    Username" />
      <Input type="email" placeholder="    Email or number" />
      <Input type="password" placeholder="    Password" />
      <Input type="password" placeholder="    Confirm assword" />
      <Button>Create</Button>
      <A>Already have an account? Login to Balerion</A>
    </LayoutLogin>
  );
};

export default NewAccount;
