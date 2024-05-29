import Root             from "./Root";
import Login            from "./Login";
import { useContext }   from 'react';
import AuthContext      from "../provider/AuthContext";

const Index = () => {
  const { checkLoginState, isLoggedIn } = useContext( AuthContext )
  if ( isLoggedIn === null ) { 
    checkLoginState();
    return <></>;
  }

  if ( isLoggedIn === true ) return <Root />;
  return <Login />;
}
 
export default Index