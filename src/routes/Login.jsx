import React      from 'react';
import BEClient   from "../BEClient";
import logo       from '../assets/react-logo.webp';

const Login = () => {
  const handleLogin = async () => {
    try {
      const {
        data: {
          data: { url }
        }
      } = await BEClient.get('/auth/url');

      window.location.assign( url );

    } catch ( error ) {
      console.error( error );
    }
  }

  return (
    <>
      <div className="container">
        <div className="row  text-center align-items-center justify-content-center vh-100">
          <div className="col-6">
              <img src={ logo } className="app-logo " alt="logo" />
              <h3 className="my-4">Login to the App</h3>
              <div className="col-4 mx-auto">
                <button className="btn btn-primary w-100" onClick={ handleLogin }>
                  Login
                </button>
              </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Login;