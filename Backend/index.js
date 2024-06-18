import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// POST endpoint to handle data
app.post("/data", (req, res) => {
    try {
        const data = req.body;
        const number1 = parseInt(data.number1);
        const number2 = parseInt(data.number2);
        const number3 = parseInt(data.number3);
        
        const sum = number1 + number2 + number3;

        res.status(200).json({ sum: sum });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running successfully at http://localhost:${port}`);
});
