import { Tudo, Nav, A, Item, Button, Top, Section } from "../styles";

const Following = () => {
  return (
    <Tudo>
      <Nav>
        <Top>
          <A>Followers</A>
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
  );
};
export default Following;
