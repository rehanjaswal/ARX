import express from 'express'

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message : "ARX is alive"});
});

app.listen(PORT, () => {
    console.log(`ARX running on ${PORT}`);
});