const pool = require("../config/db");

const getAllUsers = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT id, name, email, role FROM users"
        );

        res.json(result.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

module.exports = {
    getAllUsers
};