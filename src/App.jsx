import Premium from "./pages/Premium";
import Results from "./pages/Results";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FreeMockTests from "./pages/FreeMockTests";
import MockExam from "./pages/MockExam";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/free" element={<FreeMockTests />} />
<Route
  path="/premium"
  element={
    <ProtectedRoute>
      <Premium />
    </ProtectedRoute>
  }
/>

<Route
  path="/results"
  element={
    <ProtectedRoute>
      <Results />
    </ProtectedRoute>
  }
/>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mock/:id"
        element={
          <ProtectedRoute>
            <MockExam />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;