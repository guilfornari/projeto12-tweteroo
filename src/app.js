import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usersList = [];
const usersTweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;

    const isUnString = (typeof username === "string") ? true : false;
    const isUaString = (typeof avatar === "string") ? true : false;

    if (!username || !isUnString || !avatar || !isUaString) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }
    const newUser = { username, avatar };
    usersList.push(newUser);
    res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;

    const isUnString = (typeof username === "string") ? true : false;
    const isUtString = (typeof tweet === "string") ? true : false;

    if (!username || !isUnString || !tweet || !isUtString) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    const isLogged = usersList.find(user => user.username === username);
    if (!isLogged) {
        return res.status(401).send("UNAUTHORIZED");
    }

    const newTweet = { username, avatar: isLogged.avatar, tweet };
    usersTweets.push(newTweet);
    res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
    const tweetsToSend = [...usersTweets];

    res.status(200).send(tweetsToSend.slice(Math.max(tweetsToSend.length - 10, 0)));

});

app.listen(5000, () => console.log("Server is running on port 5000, berk!"));

