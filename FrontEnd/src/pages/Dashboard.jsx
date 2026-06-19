import { Link } from "react-router-dom";

const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
};

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>

            <h2>Welcome Peace 🚀</h2>

            <Link to="/my-properties">
                My Properties
            </Link>
            <br /><br />
            
            <Link to="/add-property">
                Add Propert
            </Link>

            <br /><br />

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;