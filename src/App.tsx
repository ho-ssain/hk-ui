import { Route, Routes, Outlet } from "react-router-dom";
import { Layout } from "./components/site";
import { ButtonPage, CardPage, Home, InputPage, NotFoundPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index={true} element={<Home />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="card" element={<CardPage />} />
        <Route path="input" element={<InputPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );

  /*<hr className="bg-slate-600" />*/
}

export default App;
