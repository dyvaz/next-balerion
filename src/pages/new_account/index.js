import Link from "next/link";
import React from "react";
import LayoutLogin from "../../components/LayoutLogin";

import { Title, Input, Button, A } from "../login/styles";

const NewAccount = () => {
  return (
    <>
      <Title>Create yout account</Title>
      <Input type="text" placeholder="    Username" />
      <Input type="email" placeholder="    Email or number" />
      <Input type="password" placeholder="    Password" />
      <Input type="password" placeholder="    Confirm assword" />
      <Button>Create</Button>
      <Link href={"/login"}>
        <A>Already have an account? Login to Balerion</A>
      </Link>
    </>
  );
};

export default NewAccount;
