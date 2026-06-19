import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyProperties from "./pages/MyProperties";
import AddProperty from "./pages/AddProperty";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Login />}
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
                    path="/my-properties"
                    element={
                        <ProtectedRoute>
                            <MyProperties />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/add-property"
                    element={
                        <ProtectedRoute>
                            <AddProperty />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;