import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import { BasketContextProvider } from './context/basketContext';
function App() {

  const routes = createBrowserRouter(ROUTES)
  return (
 <>
  <BasketContextProvider>
 <RouterProvider router={routes}>

 </RouterProvider>
 </BasketContextProvider>
 </>
  );
}

export default App;
