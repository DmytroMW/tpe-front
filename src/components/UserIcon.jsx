import Dropdown       from 'react-bootstrap/Dropdown';
import SplitButton    from 'react-bootstrap/SplitButton';
import Accordion      from 'react-bootstrap/Accordion';
import AuthContext    from '../provider/AuthContext';
import BEClient       from '../BEClient';
import { useContext } from 'react';

const UserIcon = () => {
  const { checkLoginState } = useContext( AuthContext );
  
  const handleLogout = async () => {
      try {
          await BEClient.post('/auth/logout');
          checkLoginState();
      } catch ( error ) {
          console.error( error );
      }
  }

  return (
    <>
      <div className="d-lg-none">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <i className="bi bi-person-fill"></i>
            </Accordion.Header>
            <Accordion.Body onClick={ handleLogout } id="accordion-logout">
              Logout
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="d-none d-lg-block">
        <SplitButton
            key='userIcon'
            variant='primary'
            title={
              <i className="bi bi-person-fill"></i>
            }
          >
          <Dropdown.Item href="/" onClick={ handleLogout }>Logout</Dropdown.Item>
        </SplitButton>
      </div>
    </>
  )
}

export default UserIcon;