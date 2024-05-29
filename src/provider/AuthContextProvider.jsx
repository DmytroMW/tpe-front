import BEClient           from "../BEClient";
import AuthContext        from "./AuthContext";
import AxiosErrorHandler  from "../components/AxiosErrorHandler";
import React, {
    useCallback,
    useState,
    useEffect,
} from "react";

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [ isLoggedIn, setLoggedIn ] = useState( null );
  const [ axiosError, setAxiosError ] = useState( null );

  const checkLoginState = useCallback(async () => {
    try {
      const {
        data: {
          data: { isLoggedIn },
        }
      } = await BEClient.get('/auth/is_logged_in');

      setLoggedIn( isLoggedIn );
      
    } catch ( error ) {
      console.error( error );
      setAxiosError( error );
    } 
  }, []);
 
  useEffect(() => {
    checkLoginState()
  }, [ checkLoginState ]);

  return axiosError 
        ? <AxiosErrorHandler error={ axiosError } />
        : <AuthContext.Provider value={{ isLoggedIn, checkLoginState }}>{ children }</AuthContext.Provider>;
};

export default AuthContextProvider;