import HomePage from "./home";
import Login from "../pages/auth/login";

function Index() {
  let isLogged = true;
  return <>{isLogged ? <HomePage /> : <Login />}</>;
  // return <HomePage />;
}
export default Index;
