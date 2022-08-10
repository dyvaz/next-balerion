import Link from "next/link";
import { Title, Input, Button, Exit } from "../../../components/Login/styles";

const RecuperarSenha = () => {
  return (
    <>
      <Exit>
        <Link href={"/auth/login"}>
          <Button className="exit">X</Button>
        </Link>
      </Exit>

      <Title>Find your Twitter account</Title>
      <Input type="text" placeholder="  Email or username" />
      <Button>Search</Button>
    </>
  );
};

export default RecuperarSenha;
