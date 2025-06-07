import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { DashboardPage } from './pages/Dashboard';
import { RecoverPasswordPage } from './pages/RecoverPassword';
import { RegisterPage } from './pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/recuperar-senha',
    element: <RecoverPasswordPage />,
  },
  {
    path: '/cadastro',
    element: <RegisterPage />,
  }
]); 