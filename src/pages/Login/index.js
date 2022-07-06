import Link from "next/link";
import { Title, Input, Button, A } from "./styles";
import LayoutLogin from "../../components/LayoutLogin";

const Login = () => {
  return (
    <>
      <LayoutLogin>
        <Title>Login in to Balerion</Title>
        <Input type="email" placeholder="    Email or username" />
        <Input type="password" placeholder="   Password" />
        <Button>Login</Button>

        <A>Forget password?</A>
        <Link href={"/NewAccount"}>
          <A>Sing up for Balerion</A>
        </Link>
      </LayoutLogin>
    </>
  );
};
export default Login;
