import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors())
app.post("/data", (req, res) => {
    const data = req.body;
    const sum = data.number1 + data.number2 + data.number3;

    try {
        res.status(200).json({ sum: sum });
    } catch (error) {
        res.status(500).json({ Message: error });
    }
});

app.listen(port, () => {
    console.log(`Server is running successfully at http://localhost:${port}`);
});
