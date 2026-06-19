import { useEffect, useState } from "react";
import api from "../services/api";

function MyProperties() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get(
                "/properties/my-properties",
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            setProperties(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    const deleteProperty = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await api.delete(`/properties/${id}`, {
                headers: {
                    Authorization: token
                }
            });

            fetchProperties();

        } catch (error) {
            console.error(error);
            alert("Failed to delete property");
        }
    };

    return (
        <div>
            <h1>My Properties</h1>

            {properties.map((property) => (
                <div key={property.id}>
                    <h3>{property.name}</h3>
                    <p>{property.city}</p>

                    <button
                        onClick={() => deleteProperty(property.id)}
                    >
                        Delete
                    </button>

                    <hr />
                </div>
            ))}
        </div>
    );
}

export default MyProperties;