import express from "express";
import axios from "axios";

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://unblck3r.eng.run/flag", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/113.0.0.0 Safari/537.36",
        "Referer": "http://unblck3r.eng.run/",
        "Origin": "http://unblck3r.eng.run/",
      },
    });
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Failed to fetch flag: " + error.message);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
