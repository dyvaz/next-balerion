import HomePage from "./home";
import Login from "../pages/auth/login";

function Index() {
  let isSignedIn = true;
  return <>{isSignedIn ? <HomePage /> : <Login />}</>;
  // return <HomePage />;
}
export default Index;
