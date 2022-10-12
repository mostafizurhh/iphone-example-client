import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Phone from './components/Phone/Phone';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/phones') /* for own created API will get error if you don't run the command (npm install cors) in server side where the server is running */
      },
      {
        path: '/phones/:id',
        element: <Phone></Phone>,
        loader: async ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ]
  }])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
