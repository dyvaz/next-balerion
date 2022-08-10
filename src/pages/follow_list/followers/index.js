import Link from "next/link";
import Main from "../../../components/Main";
import {
  Tudo,
  Nav,
  A,
  Item,
  Button,
  Top,
  Section,
} from "../../../components/FollowList/styles";

import { UserTwo } from "../../../components/User";

export const Followers = () => {
  return (
    <Main>
      <Tudo>
        <Nav>
          <Top>
            <A className="active"> Followers</A>
            <Link href={"/follow_list/following"}>
              <A>Following</A>
            </Link>
          </Top>
        </Nav>
        <Section>
          <Item>
            <UserTwo />
            <Button>Follow</Button>
          </Item>
          <Item>
            <UserTwo />
            <Button>Follow</Button>
          </Item>
        </Section>
      </Tudo>
    </Main>
  );
};
export default Followers;
