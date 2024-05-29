import React            from 'react';
import ContainerWrapper from '../components/ContainerWrapper';
import AccountContext   from '../provider/AccountContext';
import { useState }     from 'react';

const Account = () => {
  const [ account, setAccount ] = useState( null );

  return (
      <>
        <AccountContext.Provider value={{ account, setAccount }}>
            <ContainerWrapper />
        </AccountContext.Provider>;
      </>
  );
};

export default Account;