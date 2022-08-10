import Link from "next/link";
import { Title, Input, Button, A } from "../../../components/Login/styles";

const Login = () => {
  return (
    <>
      <Title>Login in to Balerion</Title>
      <Input type="email" placeholder="    Email or username" />
      <Input type="password" placeholder="   Password" />
      <Button>Login</Button>

      <Link href={"/auth/recover"}>
        <A>Forget password?</A>
      </Link>
      <Link href={"/auth/new_account"}>
        <A>Sing up for Balerion</A>
      </Link>
    </>
  );
};
export default Login;
