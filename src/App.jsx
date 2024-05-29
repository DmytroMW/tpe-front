import React                from 'react';
import Index                from './routes/Index';
import Callback             from './routes/Callback';
import Activation           from './routes/Activation';
import Account              from './routes/Account';
import AccountItemEdit      from './components/AccountItemEdit';
import Error                from './components/Error';
import HomePage             from './components/HomePage';
import AuthContextProvider  from './provider/AuthContextProvider';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import 
  AccountItemGet,
  { accountLoader }
from './components/AccountItemGet';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "activation",
        element: <Activation />,
        errorElement: <Error />,
      },
      {
        path: "account",
        element: <Account />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <i>Input account ID</i>,
          },
          {
            path: ":accountId",
            element: <AccountItemGet />,
            loader: accountLoader
          },
          {
            path: ":accountId/edit",
            element: <AccountItemEdit />
          }
        ]
      },
    ]
  },
  {
    path: '/auth/callback', // google will redirect here
    element: <Callback />,
    errorElement: <Error />,
  }
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
    </header>
    </div>
  )
}

export default App;

