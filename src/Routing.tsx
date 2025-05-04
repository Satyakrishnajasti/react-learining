import { Route, Routes, Link } from "react-router-dom";
import App from "./App";
import API from "./Api";

function Routing() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/api">API</Link>
      </nav>

      <Routes>
        {/* The parent route should be configured with path="/" */}
        <Route path="/" element={<App />} />
        {/* This will render the App component */}
        <Route path="/api" element={<API />} />
        {/* This will render the API component */}
      </Routes>
    </div>
  );
}

export default Routing;
