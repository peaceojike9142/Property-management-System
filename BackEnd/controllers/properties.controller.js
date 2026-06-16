const pool = require("../config/db");

// GET ALL
const getAllProperties = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM properties");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

// GET ONE
const getProperty = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM properties WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Property not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
    
};

// CREATE
const createProperty = async (req, res) => {
    try {
        const { name, city } = req.body;

        const user_id = req.user.id; // 👈 from JWT token

        const result = await pool.query(
            "INSERT INTO properties (name, city, user_id) VALUES ($1, $2, $3) RETURNING *",
            [name, city, user_id]
        );

        res.json(result.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

// UPDATE
const updateProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, city } = req.body;

        const result = await pool.query(
            "UPDATE properties SET name = $1, city = $2 WHERE id = $3 RETURNING *",
            [name, city, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Property not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

// DELETE
const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM properties WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Property not found" });
        }

        res.json({ message: "Property deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getMyProperties = async (req, res) => {
    try {
        const user_id = req.user.id;

        const result = await pool.query(
            "SELECT * FROM properties WHERE user_id = $1",
            [user_id]
        );

        res.json(result.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

module.exports = {
    getAllProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    getMyProperties
};