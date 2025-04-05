import express from "express";
import axios from "axios";

const app = express();

app.get('/', async (req, res) => {
    try {
        const response = await axios.get("http://unblck3r.eng.run/flag");
        res.send(response.data); 
    } catch (error) {
        res.status(500).send("Failed to fetch flag: " + error.message);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
