const express = require("express");
const cors = require("cors");

const propertyRoutes = require("./routes/properties.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
    res.send("Property Management API Running");
});

app.use("/properties", propertyRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const authRoutes = require("./routes/auth.routes");

app.use("/auth", authRoutes);