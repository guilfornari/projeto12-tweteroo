import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
    const tryOut = { trial: "first", time: 1 };
    res.send(tryOut);
})

app.get("/lista-testes", (req, res) => {
    const trials = [{ trial: "first", time: 1 }, { trial: "Second", idade: 2 }];
    res.send(trials);
})

app.listen(5000, () => console.log("Running server on port 5000"));