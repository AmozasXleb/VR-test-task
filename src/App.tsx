import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Start } from './pages/StartPage/Start.tsx';
import { Code } from './pages/CodePage/Code.tsx';
import { LogIn } from './pages/LogInPage/LogIn.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';

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
  },
  {
    path: "/main",
    element: <MainPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;