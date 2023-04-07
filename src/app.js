import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usersList = [];
const usersTweets = [];

app.post("/signup", (req, res) => {
    const { username, avatar } = req.body;
    const newUser = { username, avatar };
    usersList.push(newUser);
    res.send("OK");
});

app.get("/", (req, res) => {
    const tryOut = { trial: "first", time: 1 };
    res.send(tryOut);
});

app.get("/lista-testes", (req, res) => {
    const trials = [{ trial: "first", time: 1 }, { trial: "Second", idade: 2 }];
    res.send(trials);
});

app.listen(5000, () => console.log("Server is running on port 5000, berk!"));

