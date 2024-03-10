import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComplainForm } from "./components/ComplainForm";
import { Footer } from "./components/Footer";
import { NavbarBs } from "./components/Navbar";
import { Subnavbar } from "./components/Subnavbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    path: "/login",
    exact: true,
    component: <Login />,
  },
  {
    path: "/signup",
    exact: true,
    component: <Signup />,
  },
  {
    path: "/complain",
    exact: true,
    component: <ComplainForm />,
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarBs />
        <Subnavbar />
        <Routes>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} path={path} exact={exact} element={component} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
