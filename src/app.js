import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usersList = [];
const usersTweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    const newUser = { username, avatar };
    usersList.push(newUser);
    res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;

    const isLogged = usersList.find(user => user.username === username);
    if (!isLogged) {
        return res.status(401).send("UNAUTHORIZED");
    }

    const newTweet = { username, avatar: isLogged.avatar, tweet };
    usersTweets.push(newTweet);
    console.log(usersTweets);
    res.status(201).send("OK");
});


app.get("/tweets", (req, res) => {
    const tweetsToSend = [...usersTweets];

    const maxLength = 10;
    if (tweetsToSend.length > maxLength) {
        tweetsToSend.length = 10;
    }

    res.status(200).send(tweetsToSend);

});

app.listen(5000, () => console.log("Server is running on port 5000, berk!"));

