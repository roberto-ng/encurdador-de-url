import express from 'express'

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        titulo: '',
        nome: 'mundo'
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});