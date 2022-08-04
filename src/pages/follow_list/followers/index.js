import { Tudo, Nav, A, Item, Button, Top, Section } from "../styles";

export const Followers = () => {
  return (
    <Tudo>
      <Nav>
        <Top>
          <A>Following</A>
          <A className="active">Followers</A>
        </Top>
      </Nav>

      <Item>
        <Button>Followe</Button>
      </Item>
      <Item>
        <Button>Followe</Button>
      </Item>
    </Tudo>
  );
};
export default Followers;
