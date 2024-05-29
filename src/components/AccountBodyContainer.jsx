import SearchForm from './SearchForm';
import { Outlet } from "react-router-dom";

const AccountBodyContainer = () => {
  return (
    <>
      <SearchForm />
      <hr />
      <Outlet />
    </>
  );
};

export default AccountBodyContainer;