import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { RecoverPasswordPage } from './pages/RecoverPassword';
import { RegisterPage } from './pages/Register';
import { HomePage } from './pages/Home';
import { PrivateRoute } from './lib/PrivateRoute';
import { CreateWorkspacePage } from './pages/CreateWorkspace';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/recuperar-senha',
    element: <RecoverPasswordPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/home',
    element: <PrivateRoute />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/create-workspace',
    element: <CreateWorkspacePage />,
  },
]); 