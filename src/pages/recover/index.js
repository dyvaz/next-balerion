import Link from "next/link";
import { Title, Input, Button, Exit } from "../login/styles";

const RecuperarSenha = () => {
  return (
    <>
      <Link href={"/login"}>
        <Exit>
          <Button className="exit">X</Button>
        </Exit>
      </Link>
      <Title>Find your Twitter account</Title>
      <Input type="text" placeholder="  Email or username" />
      <Button>Search</Button>
    </>
  );
};

export default RecuperarSenha;
