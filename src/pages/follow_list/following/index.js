import Link from "next/link";
import Main from "../../../components/Main";
import { Tudo, Nav, A, Item, Button, Top, Section } from "../styles";

const Following = () => {
  return (
    <Main>
      <Tudo>
        <Nav>
          <Top>
            <Link href={"/follow_list/followers"}>
              <A>Followers</A>
            </Link>
            <A className="active">Following</A>
          </Top>
        </Nav>
        <Section>
          <Item>
            <Button>Following</Button>
          </Item>
          <Item>
            <Button>Following</Button>
          </Item>
        </Section>
      </Tudo>
    </Main>
  );
};
export default Following;
