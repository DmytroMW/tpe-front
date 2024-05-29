import AuthContext      from '../provider/AuthContext';
import { useNavigate }  from 'react-router-dom';
import BEClient         from "../BEClient";

import {
  useEffect,
  useRef,
  useContext,
} from 'react';

const Callback = () => {
  const called = useRef( false );
  const { checkLoginState, isLoggedIn } = useContext( AuthContext );
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if ( isLoggedIn === false ) {
        try {
          if ( called.current ) return; // prevent rerender caused by StrictMode
          called.current = true;

          const urlParams = new URLSearchParams( window.location.search );
          const code = urlParams.get( 'code' );
          await BEClient.get(`/auth/token?code=${ code }`);

          checkLoginState();
          navigate('/');

        } catch ( error ) {
          console.error( error );
          throw error;
        }
      } else if ( isLoggedIn === true ) {
        navigate('/');
      }
    })()
  }, [ checkLoginState, isLoggedIn, navigate ]);
  
  return <></>;
}

export default Callback;