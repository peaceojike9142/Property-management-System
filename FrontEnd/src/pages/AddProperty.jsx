import { useState } from "react";
import api from "../services/api";

function AddProperty() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            await api.post(
                "/properties",
                { name, city },
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            alert("Property Added!");

            setName("");
            setCity("");

        } catch (error) {
            console.error(error);
            alert("Failed to add property");
        }
    };

    return (
        <div>
            <h1>Add Property</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Property Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Add Property
                </button>
            </form>
        </div>
    );
}

export default AddProperty;