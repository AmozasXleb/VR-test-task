import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Start } from './pages/Start.tsx';
import { Code } from './pages/Code.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/code",
    element: <Code />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;