import HomePage from "./home";
import Login from "../pages/login";

function Index() {
  let isLogado = true;
  return <>{isLogado ? <HomePage /> : <Login />}</>;
}
export default Index;
