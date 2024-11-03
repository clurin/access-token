const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken")

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
    {
        userName: "Grisha",
        password: "131415"
    },
    {
        userName: "Michail",
        password: "224576"
    },
    {
        userName: "Olga",
        password: "987654"
    },
    {
        userName: "Ivan",
        password: "qwerty123"
    },
    {
        userName: "Anna",
        password: "password321"
    },
    {
        userName: "Sergey",
        password: "mypass2021"
    }
]

const checkUser = (user) => {
    if (user.isLogIn) {
        users.push({ userName: user.userName, password: user.password })
        return true
    }

    const active = users.find((item) => (item.userName === user.userName) && (item.password === user.password))
    return active ? true : false
}

app.post('/login', (req, res) => {
    //? При неудачной авторизации
    if (!checkUser(req.body)) return res.json(false)

    const accessToken = jwt.sign({}, "zoom", { expiresIn: "1d" })
    res.json({ accessToken: accessToken })
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3010, () => console.log('Сервер OK'))