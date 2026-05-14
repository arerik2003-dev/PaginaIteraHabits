const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log('GET / received');
    res.render('index', (err, html) => {
        if (err) {
            console.error('Error rendering index:', err);
            return res.status(500).send('Render error');
        }
        console.log('Rendered index successfully');
        res.send(html);
    });
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Servidor de Itera Habits escuchando en http://localhost:${port}`);
});


