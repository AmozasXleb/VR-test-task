import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Start } from './pages/Start.tsx';
import { Code } from './pages/Code.tsx';
import { LogIn } from './pages/LogIn.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/code",
    element: <Code />,
  },
  {
    path: "/login",
    element: <LogIn />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;