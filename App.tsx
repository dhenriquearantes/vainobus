import './index.css';

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom';
import { queryClient } from './src/lib/react-query'

import { router } from './src/routes'


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}