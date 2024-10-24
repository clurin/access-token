const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const cars = [
    { model: 'Tesla', price: 20000000, maxSpeed: 200, id: 1 },
    { model: 'BMW', price: 66000, maxSpeed: 120, id: 2 },
    { model: 'Audi', price: 50000, maxSpeed: 140, id: 3 },
    { model: 'Hammer', price: 388000, maxSpeed: 120, id: 4 }
]

//get запрос
app.get('/test1', (req, res) => {
    res.json(cars)
})

app.get('/test', (req, res) => {
    res.json({ sum: Number(req.query.n1) + Number(req.query.n2) })
})

app.get('/test3', (req, res) => {
    let mass = []
    for (let i = 0; i < req.query.n; i++) {
        mass.push(i)
    }
    res.json(mass)
})

app.post('/test2', (req, res) => {
    const { model, price, maxSpeed } = req.body
    //cars.push({model,price,maxSpeed})
    cars.push({ model: model, price: price, maxSpeed: maxSpeed })
    return res.sendStatus(200)
})
app.delete('/test4', (req, res) => {
    const { id } = req.body
    for (let item of cars) {
        if (item.id === id) {
            let index = cars.indexOf(item)
            cars.splice(index, 1)
        }
    }
    return res.sendStatus(200)
})
app.patch('/lower', (req, res) => {
    const { id } = req.body
    const answer = cars.find((item) => item.id === id)
    answer.price -= 100
    return res.sendStatus(200)
})


// app.delete('/delete', (req, res)=>{
//     // удаление обьекта через поиск id элемента массива
//     const element = jsFile.notes.find((item)=> item._id === req.body.delit)
//     // ищем сам элемент
//     const index = jsFile.notes.indexOf(element)
//     // ищем по индукс элемента в маасиве
//     jsFile.notes.splice(index, 1)
//     // удаляем по индексу
//     f(jsFile)
// })


app.listen(3010, () => console.log('Сервер OK'))


