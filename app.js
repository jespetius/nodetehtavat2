const express = require('express');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/api/exercise', (req, res) => res.send(req.query));

app.post('/api/exercise', (req, res) => {
    const values = req.body;

    if (values.firstname !== undefined) {
        res.send(`<h1>Hello from Express!</h1>
        <h2>POST parameters</h2>
        <p>I recieved these parameters: </p>
        <ul>
            <li>firstname: ${values.firstname}</li>
            <li>lastname: ${values.lastname}</li>
            <li>submit: ${values.submit}</li>
        </ul>`);
    } else {
        res.send(`<h1>Hello from Express!</h1>
        <h2>POST parameters</h2>
        <p>I recieved these parameters: </p>
        <ul>
            <li>fruit: ${values.fruit}</li>
            <li>gender: ${values.gender}</li>
            <li>submit: ${values.submit}</li>
        </ul>`);
    }
})

app.post('/api/login', (req, res) => {
    const values = req.body;
    const username = 'mark';
    const password = 'giraffe';

    if (values.user === username && values.pwd === password) {
        res.status(200).send({ user: values.user });
    } else if (values.user === '' || values.pwd === '') {
        res.status(400).end();
    } else {
        res.status(403).end();
    }
})

app.get('/api', (req, res) => res.send({msg: 'Hello, World!'}));

app.use('/hello', express.static('hello'));

app.listen(port, () => console.log(`Server listening on ${port}`));