import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/Styles/GlobalStyles";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Error from "./pages/Error";
import { Header } from "./components/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
