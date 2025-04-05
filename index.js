import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.redirect('/temp');
});
app.get('/temp', (req, res) => {
    res.redirect('http://unblck3r.eng.run/flag');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
