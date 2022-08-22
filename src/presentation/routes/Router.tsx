import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Details } from "../pages/details/Details";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
